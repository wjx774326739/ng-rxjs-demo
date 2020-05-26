import {
    interval,
    Subject,
    timer
} from 'rxjs';
import {
    debounceTime,
    takeUntil
} from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-debounceTime',
  templateUrl: './debounceTime.component.html',
  styleUrls: ['./debounceTime.component.scss']
})
export class DebounceTimeComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const debounceTime$ = new Subject<number>();
    debounceTime$.pipe(
      debounceTime(1000 * 3),
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.logSer.publishLog(
        '这是在DebounceTimeComponent中记录debounceTime的日志。在3s内无新的流数据被推送过来时，才会响应处理。此时接收到的值为:'
        + data
      );
    });

    const interval$Index = interval(1000 * 1).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      debounceTime$.next(data);
      this.logSer.publishLog(
        '这是在DebounceTimeComponent记录interval的日志，每隔1s会向auditTime操作符观察对象推送一次流!此时推送的值为：'
        + data
      );
    });

    timer(1000 * 5).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      interval$Index.unsubscribe();
      this.logSer.publishLog(
        '这是在DebounceTimeComponent记录timer的日志，此时已经取消interval的订阅，相应事件不会再执行!'
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
