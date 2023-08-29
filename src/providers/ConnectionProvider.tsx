import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";

interface ConnectionContextValue {
  send: (data: any) => void;
  isConnected: boolean;
}

const ConnectionContext = createContext<ConnectionContextValue>({} as ConnectionContextValue);

interface ConnectionProviderProps {
  children: ReactNode
}

export function ConnectionProvider({ children }: ConnectionProviderProps) {
  const socket = useRef<WebSocket | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const dataChannel = useRef<RTCDataChannel | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  function initWebSocket(): Promise<WebSocket> {
    return new Promise((res) => {
      const socket = new WebSocket(`ws://${import.meta.env.VITE_WS_URL}`);

      socket.onopen = () => {
        console.log('Connected to WebSocket server');
        res(socket);
      }
    });
  }

  function initWebRTC(): RTCPeerConnection {
    const servers = import.meta.env.VITE_ICE_SERVERS?.split(',') ?? []
    const peerConnection = new RTCPeerConnection({ iceServers: servers.map((server) => ({ urls: server })) });

    return peerConnection;
  }

  useEffect(() => {
    (async () => {
      socket.current = await initWebSocket();

      peerConnection.current = initWebRTC();
      dataChannel.current = peerConnection.current.createDataChannel('data');

      dataChannel.current.onmessage = ({ data }) => console.log(data);
      dataChannel.current.onopen = () => setIsConnected(true);
      dataChannel.current.onclose = () => setIsConnected(false);

      socket.current.onmessage = async ({ data }) => {
        const message = JSON.parse(data);
        if (message.answer) {
          await peerConnection.current?.setRemoteDescription(message.answer);
          const answer = await peerConnection.current?.createAnswer();
          await peerConnection.current?.setLocalDescription(answer);
          socket.current?.send(JSON.stringify({ answer }))
        }

        if (message.ice) {
          peerConnection.current?.addIceCandidate(message.ice)
        }
      }

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.current.send(JSON.stringify({ offer: offer }));

      peerConnection.current.onicecandidate = ({ candidate }) => {
        socket.current?.send(JSON.stringify({ ice: candidate }))
      }
    })();

    return () => {
      if (socket.current) socket.current.close();
      if (peerConnection.current) peerConnection.current.close();
      if (dataChannel.current) dataChannel.current.close();
    }
  }, [])

  const contextValue: ConnectionContextValue = {
    send: (data) => dataChannel.current?.send(data),
    isConnected
  }

  return <ConnectionContext.Provider value={contextValue}>
    {children}
  </ConnectionContext.Provider>
}

export function useConnection() {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useConnection must be used within a ConnectionProvider');
  }
  return context;
}