import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-demo';
  menuList = [
    {
      name: 'of',
      url: '/of'
    },
    {
      name: 'from',
      url: '/from'
    },
    {
      name: 'fromEvent',
      url: '/fromEvent'
    },
    {
      name: 'switchMap',
      url: '/switchMap'
    },
    {
      name: 'auditTime',
      url: '/auditTime'
    },
    {
      name: 'debounceTime',
      url: '/debounceTime'
    },
    {
      name: 'takeUntil',
      url: '/takeUntil'
    },
    {
      name: 'map',
      url: '/map'
    },
    {
      name: 'observable',
      url: '/observable'
    },
    {
      name: 'distinctUntilChanged',
      url: '/distinctUntilChanged'
    },
    {
      name: 'merge',
      url: '/merge'
    },
  ];

  logs: string[] = [];

  constructor(
    private logSer: LogService,
  ) {
    this.logSer.subscribeLog().subscribe(log => this.logs.push(log));
  }

  onClearLogs(): void {
    this.logs = [];
  }

}
