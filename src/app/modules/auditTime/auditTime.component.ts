import {
    interval,
    Subject
} from 'rxjs';
import {
    auditTime,
    takeUntil
} from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-auditTime',
  templateUrl: './auditTime.component.html',
  styleUrls: ['./auditTime.component.scss']
})
export class AuditTimeComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const auditTime$ = new Subject<number>();
    auditTime$.pipe(
      auditTime(1000 * 2),
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.logSer.publishLog(
        '这是在AuditTimeComponent记录auditTime操作符的日志，每隔2s会响应记录一次日志信息,此时接收到的值为：'
        + data
      );
    });

    interval(1000 * 1.5).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      auditTime$.next(data);
      this.logSer.publishLog(
        '这是在AuditTimeComponent记录interval的日志，每隔1.5s会像auditTime操作符观察对象推送一次流!此时推送的值为：'
        + data
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
