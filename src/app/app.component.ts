import { Component } from '@angular/core';

import { LogService } from './log.service';
import { Menus } from './mocks/menus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'rxjs-demo';

  menuList = Menus;

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
