import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogService } from 'src/app/log.service';

import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private logSer: LogService,
  ) { }

  ngOnInit() {
    const values = new Array(10).fill('').map((item, index) => index);
    of(...values).pipe(
      map(data => {
        return '这是处理后的值:' + data;
      })
    ).subscribe(data => {
      this.logSer.publishLog('这是在MapComponent记录的日志。此时接收到的数据为：' + data);
    });

  }

}
