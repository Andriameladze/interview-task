import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Scenario5Service {
  private userData = new BehaviorSubject('Lebron');
  userData$ = this.userData.asObservable();

  constructor() {}

  setUserData() {
    this.userData.next('Stefanos');
  }
}
