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

## switchMap操作符
- 将一个observable观察对象A转成另一个观察对象B。A发出一个流，B才发出一个流。
- B发出的流如果是一个观察者对象，那么会将观察者对象中的值发送完。
- B发出的流如果不是一个观察者对象，是一个字符串，那么会将字符串拆成一个个字符发出。；
- 如果A和B发出的观察者对象都有发出complete事件，整个观察者事件也将收到complete，不用取消订阅；
- 如果A或者B发出的观察者对象没有发出complete事件，整个观察事件会一直持续；
- 整个观察事件持续的时间（即收到complete）根据A和B发出的观察者对象发出的complete中，哪个时间最晚决定。即需要所有都发出complete之后，才会结束整个观察事件

## auditTime操作符
- 设置一个时间，在这个时间内接收到多个流数据，只会响应一次。
- 响应时处理的值为最近一次接收到的流数据.
- 常用于节流操作，即避免频繁地响应。
