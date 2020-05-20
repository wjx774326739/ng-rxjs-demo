import {
    Observable,
    of,
    Subscription
} from 'rxjs';
import {
    delay,
    switchMap
} from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-switchMap',
  templateUrl: './switchMap.component.html',
  styleUrls: ['./switchMap.component.scss']
})
export class SwitchMapComponent implements OnInit, OnDestroy {

  switchMap$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const value = [1, 2, 3, 4, 5, 6];
    this.switchMap$Index = new Observable(o => {
      value.forEach(item => o.next(item));
      setTimeout(() => {
        o.complete();
        console.log('外部complete');
      }, 1000 * 5);
    }).pipe(
      switchMap((data) => {
        console.log(data);
        // return of('switchMap:' + data, data);
        return new Observable(ob => {
          ob.next('switchMap:' + data);
          setTimeout(() => {
            ob.next('another switchMap:' + data);
          }, 1000 * 0.5);
          setTimeout(() => {
            ob.complete();
            console.log('内部complete');
          }, 1000 * 10);
        });
        // return 'switchMap:' + data;
      })
    ).subscribe(
      data => {
        console.log(data);
        this.logSer.publishLog(
          '这是在SwitchMapComponent中记录的日志。此时订阅到的值为 '
          + data
        );
      },
      () => { },
      () => {
        console.log('complete');
        this.logSer.publishLog('这是switchMap的complete事件');
        setTimeout(() => {
          this.logSer.publishLog(
            '这是在SwitchMapComponent中记录的日志。此时switchMap的订阅事件的状态为:closed - '
            + this.switchMap$Index.closed
          );
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在SwitchMapComponent中，组件销毁时记录的日志。此时switchMap的订阅事件的状态为:closed - '
      + this.switchMap$Index.closed
    );
  }

}
