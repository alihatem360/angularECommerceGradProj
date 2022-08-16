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
  postRegisteredUser(userObj: IUserRegister): Observable<IUserRegister> {
    return this._httpClient.post<IUserRegister>(
      `${this.apiBaseUrl}/users`,
      userObj,
      {
        headers: this.headers,
      }
    );
  }
  postLoginUser(userObj: IUserLogin): Observable<IUserLogin> {
    return this._httpClient.post<IUserLogin>(
      `${this.apiBaseUrl}/users`,
      userObj,
      {
        headers: this.headers,
      }
    );
  }
}
