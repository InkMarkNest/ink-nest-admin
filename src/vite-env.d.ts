/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type LocalForageDriver = 'INDEXEDDB' | 'WEBSQL' | 'LOCALSTORAGE';

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_MODE: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_LOCAL_DRIVER: LocalForageDriver;
  readonly VITE_LOCAL_NAME: string;
  readonly VITE_LOCAL_VERSION: number;
  readonly VITE_LOCAL_STORENAME: string;
  readonly VITE_LOCAL_DESCRIPTION: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
