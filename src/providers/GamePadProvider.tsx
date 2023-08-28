import React, { createContext, useContext, useEffect, useRef } from 'react';

import protobuf from 'protobufjs'
import protocol from '../data/messages.proto?raw'

const messages = protobuf.parse(protocol);
const Update = messages.root.lookupType('webmote.Update');

export interface ButtonUpdate {
  name: string;
  pressed: boolean;
}

export interface AxisUpdate {
  name: string;
  x: number;
  y: number;
}

interface GamePadContextValue {
  sendButton: (data: ButtonUpdate) => void;
  sendAxis: (data: AxisUpdate) => void;
}

const GamePadContext = createContext<GamePadContextValue>(
  {} as GamePadContextValue
);

interface GamePadProviderProps {
  children: React.ReactNode;
}

export function GamePadProvider({ children }: GamePadProviderProps) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(`ws://${import.meta.env.VITE_WS_URL}`);
    socketRef.current.binaryType = 'arraybuffer';

    socketRef.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const sendButton = async (update: ButtonUpdate) => {
    if (socketRef.current) {
      const message = Update.fromObject({
        button: update
      })

      const buffer = Update.encode(message).finish();
      socketRef.current.send(buffer);
    }
  }

  const sendAxis = async (update: AxisUpdate) => {
    if (socketRef.current) {
      const message = Update.fromObject({
        axis: update
      })

      const buffer = Update.encode(message).finish();
      socketRef.current.send(buffer);
    }
  }

  const contextValue: GamePadContextValue = {
    sendButton, sendAxis
  };

  return (
    <GamePadContext.Provider value={contextValue}>
      {children}
    </GamePadContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGamePad() {
  const context = useContext(GamePadContext);
  if (!context) {
    throw new Error('useGamePadContext must be used within a GamePadProvider');
  }
  return context;
}
