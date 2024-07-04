import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberGeneratorService {
  private _number: Subject<number> = new Subject();

  constructor() {}

  generateNumber() {
    this._number?.next(Math.floor(Math.random() * 100));
  }

  get randomNumber(): Observable<number> {
    return this._number?.asObservable();
  }
}
