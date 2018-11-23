import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  siginAuth(body = {}): Observable<any> {
    return this.http.post(this.baseUrl.getBaseUrlAuthenticate() + 'signin', body);
  }

}

