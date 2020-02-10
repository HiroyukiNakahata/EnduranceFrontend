import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {TokenAndId, UserLogin} from '../model/user';
import {AuthenticationException, BadRequestException, NetworkException, ServerErrorException} from '../model/error';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  AjaxPostLogin(login: UserLogin): Promise<TokenAndId> {
    return this.httpClient.post<TokenAndId>('/login', login, {
      headers: new HttpHeaders({'Content-Type': 'Application/json'})
    }).toPromise().then(d => d).catch(e => {
      console.log(e);

      if (e instanceof ErrorEvent) {
        throw new NetworkException(e.message);
      }

      if (e instanceof HttpErrorResponse) {
        switch (e.status) {
          case 0:
            throw new NetworkException(e.message);
          case 400:
            throw new BadRequestException(e.message);
          case 401:
            throw new AuthenticationException(e.message);
          case 500:
            throw new ServerErrorException(e.message);
          default:
            throw e;
        }
      }

      throw e;
    });
  }
}
