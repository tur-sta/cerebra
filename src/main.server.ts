// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';

export function bootstrap() {
  return bootstrapApplication(
    AppComponent,
    {
      ...appConfig,
      providers: [
        ...(appConfig.providers ?? []),
        provideServerRendering(),
      ],
    },
  );
}

export default bootstrap;
