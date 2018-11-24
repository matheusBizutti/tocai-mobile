import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class MusicalListService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  getMusicalList(type): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'musical-list/list/' + `${type}`);
  }

  sendMail(body): Observable<any> {
    return this.http.post(this.baseUrl.getBaseUrl() + 'musical-list/sendmail', body);
  }

}

