/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WS_URL: string
    readonly VITE_ICE_SERVERS?: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }