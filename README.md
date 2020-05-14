# NgRxjsDemo
## 说明
- 学习rxjs的一些demo

## 运行
- 启动：`npm start`;
- 打包：`npm run build:prod`

# 总结
## of操作符
- 按顺序发出任意数量的值；
- 值全部发送之后，自动complete结束；
- 因此可以不用手动取消订阅

## from操作符
- 可以将数组、Promise、迭代器和Observable的值转成Observable，以流的形式发出值；
- 如果是数组、迭代器，会将元素以一个一个流的形式发送出去，直到全部发送出去；
- 如果是Promise,会将最后的值发送出去
- 如果是Observable,会将接收到的流重新以流的形式发送出去
- 值全部发送之后，自动complete结束。如果是Observable，需要等到该Observable发出complete之后，from操作符才会complete结束,或者手动取消订阅
- 因此数组、Promise、迭代器下可以不用手动取消订阅，Observable视情况而定

## fromEvent操作符
- 可以监听dom元素的event事件，比如click等。每次事件触发以流的形式发出值；
- 组件销毁时不会自动取消订阅，需要手动取消订阅；
