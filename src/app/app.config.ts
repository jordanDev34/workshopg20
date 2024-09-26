// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
// };

import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Utilise appRoutes au lieu de routes

export const appConfig = {
  providers: [provideRouter(appRoutes)],
};
