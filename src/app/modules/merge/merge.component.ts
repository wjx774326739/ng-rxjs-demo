import {
    merge,
    of,
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
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();

  constructor(
    private logSer: LogService
  ) { }

  ngOnInit() {
    merge(
      of(...(new Array(10).fill('').map((item, index) => index))),
      of(...(new Array(10).fill('').map((item, index) => index + 100))),
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      data => {
        this.logSer.publishLog('这是在MergeComponent中记录的日志。此时接收到的数据为:' + data);
      },
      () => { },
      () => {
        this.logSer.publishLog('这是在MergeComponent中记录的日志。此时merge订阅事件complete');
      }
    );

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
