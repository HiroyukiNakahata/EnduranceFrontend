import {Component, OnDestroy, OnInit} from '@angular/core';
import {MinutesService} from '../../../../service/minutes.service';
import {Subject, Subscription} from 'rxjs';
import {MinutesSummary} from '../../../../model/minutes';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  summaries: MinutesSummary[] = [];
  summarySubject: Subject<MinutesSummary[]>;
  subscription: Subscription;

  constructor(private minutesService: MinutesService) {
  }

  ngOnInit(): void {
    this.summarySubject = this.minutesService.getMinutesSummarySubject();
    this.subscription = this.summarySubject.subscribe(
      msg => {
        console.log(msg);
        this.summaries = msg;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
