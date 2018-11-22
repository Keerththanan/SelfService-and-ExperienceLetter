import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();

  loggedInSource$ = this.loggedInSource.asObservable();

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }
}
