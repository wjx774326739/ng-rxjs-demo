import {
    of,
    Subscription
} from 'rxjs';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit, OnDestroy {

  of$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const values = [1, 2, 3];
    this.of$Index = of(...values).subscribe(
      data => {
        this.logSer.publishLog('这是订阅of操作符发出的值：' + data);
      },
      () => { },
      () => {
        console.log('complete');
        this.logSer.publishLog('这是of操作符的complete事件');
      }
    );
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在OfComponent中，组件销毁时记录的日志。此时of操作符的订阅事件的状态为:closed - '
      + this.of$Index.closed
    );
  }

}
