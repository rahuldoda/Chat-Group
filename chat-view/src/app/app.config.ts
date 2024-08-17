import { ApplicationConfig, effect, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { userReducer } from './shared/Users/users.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { UserEffects } from '../app/shared/Users/users.effect';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(), provideStore(),
    provideState({ name: 'user', reducer: userReducer }), provideEffects(UserEffects), provideAnimationsAsync()]
};