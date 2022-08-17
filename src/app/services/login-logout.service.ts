
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginLogoutService {
  token: string | null = '';
  userChange = new BehaviorSubject<string | null>('');

  constructor() {
    this.userChange.subscribe((value) => {
      this.token = value;
    });
    let token: string | null = localStorage.getItem('token');

    this.userChange.next(token);
  }
  dummyAuth(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.token);
      }, 500);
    });
    return promise;
  }

  loginUser(id: string) {
    this.userChange.next(id);
    localStorage.setItem('token', `${id}`);
  }

  logoutUser() {
    this.userChange.next('');
    localStorage.setItem('token', '');
  }


}
