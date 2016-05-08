import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'ng2-firebase-app',
  templateUrl: 'ng2-firebase.component.html',
  styleUrls: ['ng2-firebase.component.css']
})
export class Ng2FirebaseAppComponent {
  public people: FirebaseListObservable<any[]>;
  public data: any[];
  public title: string = 'ng2-firebase works!';

  constructor(private af: AngularFire) {
    // This syntax uses the async pipe to unwrap the observable
    this.people = af.database.list('/people');
    
    // This syntax uses subscribe to get the data from the observable
    let subscription = af.database.object('/data').subscribe((data) => {
      this.data = data;
    });
  }
}
