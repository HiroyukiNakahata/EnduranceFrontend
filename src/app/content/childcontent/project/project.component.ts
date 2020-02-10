import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from '../../../service/project.service';
import {Subject, Subscription} from 'rxjs';
import {Project} from '../../../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  projectSubject: Subject<Project[]>;
  subscription: Subscription;

  constructor(private projectService: ProjectService) {
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
}
