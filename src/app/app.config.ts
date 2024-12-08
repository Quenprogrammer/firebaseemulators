import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling
} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {connectAuthEmulator, getAuth, provideAuth} from '@angular/fire/auth';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {connectFirestoreEmulator, getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {environment} from "../environments/environment";
import {environment1} from "../environments/environment.development";

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling(scrollConfig)),
    provideFirebaseApp(() => initializeApp(environment1.firebaseApp)),
    provideAuth(() => {
      const auth = getAuth();
      if(!environment.isProduction) {
        connectAuthEmulator(auth, 'http://localhost:3099', {disableWarnings: true});
      }

      return auth;
    }),
    provideFirestore(() => {
      const db = getFirestore();

        connectFirestoreEmulator(db, '127.0.0.1',2480);

      return db;
    }),
    provideFunctions(() => getFunctions()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,

  ]
};
