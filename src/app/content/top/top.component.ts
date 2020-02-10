import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {TokenService} from '../../service/token.service';
import {AuthenticationException, NetworkException} from '../../model/error';
import {Router} from '@angular/router';

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
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.AjaxPostLogin({mail_address: this.userId, password: this.password})
      .then(d => {
        console.log(d);
        this.tokenService.setToken(d.token);
        this.tokenService.setUserId(d.id);
        this.router.navigate(['dashboard']);
      })
      .catch(e => {
        if (e instanceof AuthenticationException) {
          window.alert('ログインに失敗しました');
        } else if (e instanceof NetworkException) {
          window.alert('ネットワークエラー');
        }
      });
  }
}
