/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ROUTE_PREFIX: string;
  readonly VITE_APP_API_ENDPOINT: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
