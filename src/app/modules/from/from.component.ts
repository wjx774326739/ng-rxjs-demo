import {
    from,
    Subject,
    Subscription
} from 'rxjs';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit, OnDestroy {

  from$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const value = new Subject();
    this.from$Index = from(value).subscribe(
      data => {
        console.log(data);
        this.logSer.publishLog('这是订阅from操作符发出的值：' + data);
      },
      () => { },
      () => {
        console.log('complete');
        this.logSer.publishLog('这是from操作符的complete事件');
      }
    );

    let count = 0;
    setInterval(() => {
      value.next(++count);
    }, 500);

    setTimeout(() => {
      value.complete();
      // this.from$Index.unsubscribe();
    }, 3000);
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在FromComponent中，组件销毁时记录的日志。此时From操作符的订阅事件的状态为:closed - '
      + this.from$Index.closed
    );
  }

}
