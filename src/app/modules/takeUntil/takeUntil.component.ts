import {
    interval,
    Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-takeUntil',
  templateUrl: './takeUntil.component.html',
  styleUrls: ['./takeUntil.component.scss']
})
export class TakeUntilComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  private message$ = new Subject<void>();

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const takeUntil$ = new Subject<void>();
    takeUntil$.pipe(
      takeUntil(this.message$)
    ).subscribe(
      () => {
        this.logSer.publishLog(
          '这是在TakeUntilComponent记录takeUntil的日志，此时接收到新的数据流!'
        );
      },
      () => { },
      () => {
        console.log('complete');
        this.logSer.publishLog('TakeUntilComponent记录takeUntil的日志.此时接收到complete事件');
      }
    );

    interval(1.5 * 1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.logSer.publishLog(
        '这是在TakeUntilComponent记录interval的日志，每隔1.5s会像takeUntil操作符观察对象推送一次流!'
      );
      takeUntil$.next();
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSendMsg(): void {
    this.message$.next();
    this.logSer.publishLog(
      '这是在TakeUntilComponent记录的日志，此时向takeUntil中订阅的观察者对象发送值!'
    );
  }

}
