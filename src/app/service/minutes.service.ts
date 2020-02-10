import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MinutesSummary} from '../model/minutes';

@Injectable({
  providedIn: 'root'
})
export class MinutesService {

  constructor(private httpClient: HttpClient) {
  }

  AjaxGetMinutesSummary(token: string): Promise<MinutesSummary[]> {
    return this.httpClient.get<MinutesSummary[]>('/api/minutes/summary', {
      headers: new HttpHeaders({Authorization: 'Bearer ' + token})
    }).toPromise().then(d => d);
  }
}
