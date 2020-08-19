import {
    interval,
    Subscription
} from 'rxjs';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  interval$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    this.interval$Index = interval(1000 * 1).subscribe(data => {
      this.logSer.publishLog('这是订阅interval操作符发出的值：' + data);
    });
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在IntervalComponent中，组件销毁时记录的日志。此时interval操作符的订阅事件的状态为:closed - '
      + this.interval$Index.closed
    );
  }

}
