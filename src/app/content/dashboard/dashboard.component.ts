import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MinutesService} from '../../service/minutes.service';
import {ProjectService} from '../../service/project.service';
import {TodoService} from '../../service/todo.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {AuthenticationException} from '../../model/error';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private minutesService: MinutesService,
              private projectService: ProjectService,
              private todoService: TodoService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.minutesService.AjaxGetMinutesSummary(this.tokenService.getToken())
      .then(d => {
        this.minutesService.getMinutesSummarySubject().next(d);
      })
      .catch(e => {
        if (e instanceof AuthenticationException) {
          this.router.navigate(['']).then(() => window.alert('ログアウトしました'));
        }
      });

    this.projectService.AjaxGetProject(this.tokenService.getToken())
      .then(d => {
        this.projectService.getProjectSubject().next(d);
      })
      .catch(e => {
        if (e instanceof AuthenticationException) {
          this.router.navigate(['']);
        }
      });

    this.todoService.AjaxGetTodo(this.tokenService.getToken())
      .then(d => {
        this.todoService.getTodoSubject().next(d);
      })
      .catch(e => {
        if (e instanceof AuthenticationException) {
          this.router.navigate(['']);
        }
      });
  }

  ngAfterViewInit(): void {
  }

}
