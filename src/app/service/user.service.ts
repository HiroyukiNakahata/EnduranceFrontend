import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenAndId, UserLogin} from '../model/user';
import {httpErrorHandler} from '../model/error';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  AjaxPostLogin(login: UserLogin): Promise<TokenAndId> {
    return this.httpClient.post<TokenAndId>('/login', login, {
      headers: new HttpHeaders({'Content-Type': 'Application/json'})
    }).toPromise().then(d => d).catch(httpErrorHandler);
  }
}
