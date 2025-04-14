import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {provideCharts, withDefaultRegisterables} from 'ng2-charts';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    provideCharts(withDefaultRegisterables())
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
