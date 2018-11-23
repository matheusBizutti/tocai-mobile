import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private email: string;
  private token: string;

  constructor(private cookieService: CookieService) { }

  clear() {
    this.token = undefined;
    this.cookieService.delete( 'token', '/' );
  }

  getEmail() {
    if (!this.email && this.cookieService.check('email')) {
      this.setEmail(this.cookieService.get('email'));
    }
    return this.email;
  }

  getToken() {
    if (!this.token && this.cookieService.check('token')) {
      this.setToken(this.cookieService.get('token'));
    }
    return this.token;
  }

  jwtDecode(token) {
    return jwt_decode(token);
  }

  setEmail(email) {
    this.email = email;
    this.cookieService.set('email', email, undefined, '/');
  }

  setToken(token) {
    this.token = token;
    const jwtDecode = this.jwtDecode(token);
    this.setEmail(jwtDecode.username);
    this.cookieService.set( 'token', token, undefined, '/' );
  }

}
