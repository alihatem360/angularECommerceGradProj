
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginLogoutService {
  userId: string | null = '';
  userChange = new BehaviorSubject<string | null>('');

  constructor() {
    this.userChange.subscribe((value) => {
      this.userId = value;
    });
    let userId: string | null = localStorage.getItem('userId');

    this.userChange.next(userId);
  }
  dummyAuth(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userId);
      }, 500);
    });
    return promise;
  }

  loginUser(id: string) {
    this.userChange.next(id);
    localStorage.setItem('userId', `${id}`);
  }

  logoutUser() {
    this.userChange.next('');
    localStorage.setItem('userId', '');
  }


}
