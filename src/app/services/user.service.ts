import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserRes, IUserRegister, IUserLogin } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(private _httpClient: HttpClient) {}

  getUsers(): Observable<IUserRes> {
    return this._httpClient.get<IUserRes>(`${this.apiBaseUrl}/users`);
  }
  getUser(id: number): Observable<IUserRes> {
    return this._httpClient.get<IUserRes>(`${this.apiBaseUrl}/users/${id}`);
  }
  headers = { 'Content-Type': 'application/json' };

  //! code that handles local API
  // postRegisteredUser(userObj: IUserRegister): Observable<IUserRegister> {
  //   return this._httpClient.post<IUserRegister>(
  //     `${this.apiBaseUrl}/users`,
  //     userObj,
  //     {
  //       headers: this.headers,
  //     }
  //   );
  // }
  
  postRegisteredUser(userData: IUserRegister): Observable<IUserRes> {
    return this._httpClient.post<IUserRes>(
      `${environment.apiBaseUrl}/register`,
      userData
    );
  }
  postLoginUser(userObj: IUserLogin): Observable<IUserRes> {
    return this._httpClient.post<IUserRes>(
      `${this.apiBaseUrl}/users`,
      userObj,
      {
        headers: this.headers,
      }
    );
  }
}
