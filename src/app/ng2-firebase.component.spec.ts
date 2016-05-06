import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2FirebaseAppComponent } from '../app/ng2-firebase.component';

beforeEachProviders(() => [Ng2FirebaseAppComponent]);

describe('App: Ng2Firebase', () => {
  it('should create the app',
      inject([Ng2FirebaseAppComponent], (app: Ng2FirebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-firebase works!\'',
      inject([Ng2FirebaseAppComponent], (app: Ng2FirebaseAppComponent) => {
    expect(app.title).toEqual('ng2-firebase works!');
  }));
});
