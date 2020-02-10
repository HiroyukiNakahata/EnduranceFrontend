import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {MinutesSummary} from '../model/minutes';
import {httpErrorHandler} from '../model/error';

@Injectable({
  providedIn: 'root'
})
export class MinutesService {
  private minutesSummarySubject: Subject<MinutesSummary[]> = new Subject<MinutesSummary[]>();

  constructor(private httpClient: HttpClient) {
  }

  AjaxGetMinutesSummary(token: string): Promise<MinutesSummary[]> {
    return this.httpClient.get<MinutesSummary[]>('/api/minutes/summary', {
      headers: new HttpHeaders({Authorization: 'Bearer ' + token})
    }).toPromise().then(d => d).catch(httpErrorHandler);
  }

  getMinutesSummarySubject(): Subject<MinutesSummary[]> {
    return this.minutesSummarySubject;
  }
}
