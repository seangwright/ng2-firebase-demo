import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2FirebaseAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

import firebaseConfig from './app/firebase-config';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2FirebaseAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(firebaseConfig.baseUrl)
]);
