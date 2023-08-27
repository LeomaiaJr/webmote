import React, { createContext, useContext, useEffect, useRef } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export enum GamePadMessageType {
  BUTTON = 'button',
  AXIS = 'axis',
}

export interface GamePadMessage {
  type: GamePadMessageType;
  name: string;
  value: boolean | [number, number];
}

interface GamePadContextValue {
  sendData: (data: GamePadMessage) => void;
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
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const sendData = (data: GamePadMessage) => {
    if (socketRef.current) {
      socketRef.current.send(JSON.stringify(data));
    }
  };

  const contextValue: GamePadContextValue = {
    sendData,
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
