import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");
// require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");
// Initialize Firebase

// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBSoLuOJ3c_OuiERetB_0TObCh2V6YrE9w",
  authDomain: "learn-d714c.firebaseapp.com",
  databaseURL: "https://learn-d714c.firebaseio.com",
  storageBucket: "learn-d714c.appspot.com",
};
firebase.initializeApp(config);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
