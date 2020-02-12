import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ProjectService} from '../../../../service/project.service';
import {Project} from '../../../../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  projectSubject: Subject<Project[]>;
  subscription: Subscription;

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.projectSubject = this.projectService.getProjectSubject();
    this.subscription = this.projectSubject.subscribe(
      msg => {
        console.log(msg);
        this.projects = msg;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  moveEditor() {
    this.router.navigate(['editor']);
  }
}
