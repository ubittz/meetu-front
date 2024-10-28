/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ROUTE_PREFIX: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
