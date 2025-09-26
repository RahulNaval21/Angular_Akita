import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

export const serverConfig: ApplicationConfig = {
  providers: [
    ...appConfig.providers!,  // reuse browser providers
    provideServerRendering()  // 👈 server-side only
  ]
};
