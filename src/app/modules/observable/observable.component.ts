import {
    interval,
    Observable,
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
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    new Observable(o => {
      interval(1.5 * 1000).pipe(takeUntil(this.destroy$)).subscribe(data => {
        o.next(data);
        this.logSer.publishLog('这是在ObservableComponent中记录的日志，每隔1.5s会像观察对象发出一个流数据');
      });
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.logSer.publishLog('这是在ObservableComponent中记录的日志，此时在观察对象中接收到的流数据为:' + data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
