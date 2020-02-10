import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {TokenService} from '../../service/token.service';
import {MinutesService} from '../../service/minutes.service';
import {AuthenticationException, NetworkException} from '../../model/error';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  userId: string;
  password: string;

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private minutesService: MinutesService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.AjaxPostLogin({mail_address: this.userId, password: this.password})
      .then(d => {
        console.log(d);
        this.tokenService.setToken(d.token);
      })
      .catch(e => {
        if (e instanceof AuthenticationException) {
          window.alert('ログインに失敗しました');
        } else if (e instanceof NetworkException) {
          window.alert('ネットワークエラー');
        }
      });
  }

  loadSummary() {
    this.minutesService.AjaxGetMinutesSummary(this.tokenService.getToken())
      .then(d => console.log(d));
  }
}
