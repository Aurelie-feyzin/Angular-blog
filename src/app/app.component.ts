import {Component} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  public constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
