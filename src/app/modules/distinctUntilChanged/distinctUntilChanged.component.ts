import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-distinctUntilChanged',
  templateUrl: './distinctUntilChanged.component.html',
  styleUrls: ['./distinctUntilChanged.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const value = [1, 2, 3, 3, 3, 4, 5, 5, 6, 1, 3, 5];
    this.logSer.publishLog('这是在DistinctUntilChangedComponent中记录的日志，此时将发送的值为：' + value.join());
    of(...value).pipe(
      distinctUntilChanged(
        // 默认为以下对比函数
        // (x, y) => {
        //   return x === y;
        // }
      )
    ).subscribe(data => {
      console.log(data);
      this.logSer.publishLog('这是在DistinctUntilChangedComponent中记录的日志，此时订阅到的值为：' + data);
    });
  }

}
