/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEAM_ID: string = 'Madrid-UCM';
  readonly VITE_TEAM_NAME: string = 'Madrid-UCM';
  readonly VITE_TEAM_YEAR: string = '2024';
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
