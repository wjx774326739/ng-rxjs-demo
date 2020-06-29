import {
    interval,
    of,
    Subject
} from 'rxjs';
import {
    map,
    mergeMap,
    take,
    takeUntil
} from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-mergeMap',
  templateUrl: './mergeMap.component.html',
  styleUrls: ['./mergeMap.component.scss']
})
export class MergeMapComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();

  constructor(
    private logSer: LogService
  ) { }

  ngOnInit() {
    of(...(new Array(10).fill('').map((item, index) => index))).pipe(
      mergeMap(data => interval(1000).pipe(
        take(5),
        map(intervalData => ['外层可观察者对象的数据:' + data, '内层可观察者对象的数据:' + intervalData])
      )),
      takeUntil(this.destroy$),
    ).subscribe(
      data => {
        this.logSer.publishLog('这是在MergeMapComponent中记录的日志。此时接收到的数据为:');
        this.logSer.publishLog(data.join());
        this.logSer.publishLog('----------------------------------------');
      },
      () => { },
      () => {
        this.logSer.publishLog('这是在MergeMapComponent中记录的日志。此时merge订阅事件complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
