import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Project} from '../model/project';
import {httpErrorHandler} from '../model/error';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectSubject: Subject<Project[]> = new Subject<Project[]>();

  constructor(private httpClient: HttpClient) {
  }

  AjaxGetProject(token: string): Promise<Project[]> {
    return this.httpClient.get<Project[]>('/api/project', {
      headers: new HttpHeaders({Authorization: 'Bearer ' + token})
    }).toPromise().then(d => d).catch(httpErrorHandler);
  }

  getProjectSubject(): Subject<Project[]> {
    return this.projectSubject;
  }
}
