import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string;
  private userId: number;

  constructor() {
    // 開発用
    if (environment.production === false) {
      this.token = sessionStorage.getItem('token');
    }
  }

  setToken(token: string) {
    this.token = token;
    // 開発用
    if (environment.production === false) {
      sessionStorage.setItem('token', token);
    }
  }

  getToken(): string {
    return this.token;
  }

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
