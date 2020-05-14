import {
    fromEvent,
    Subscription
} from 'rxjs';
import { LogService } from 'src/app/log.service';

import { DOCUMENT } from '@angular/common';
import {
    Component,
    Inject,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-fromEvent',
  templateUrl: './fromEvent.component.html',
  styleUrls: ['./fromEvent.component.scss']
})
export class FromEventComponent implements OnInit, OnDestroy {

  fromEvent$Index: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private logSer: LogService,
  ) { }

  ngOnInit() {
    this.fromEvent$Index = fromEvent(this.document.body, 'click').subscribe(() => {
      this.logSer.publishLog('在FromEventComponent订阅了body的click事件，此时监听到了click');
    });
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在FromEventComponent中，组件销毁时记录的日志。此时fromEvent操作符的订阅事件的状态为:closed - '
      + this.fromEvent$Index.closed
    );
  }

}
