# vuex

## 使用场景

当我们使用vue的组件的时候，一个父组件有两个子组件，这两个子组件要进行数据的传输，
就比较麻烦，需要通过父组件，如果组件的层级结构更加复杂了，那么组件之间的通讯就比较麻烦。

## 如果使用vuex

### 安装

```
 npm i -S vuex
```

### 使用

在main.js中引入vuex,构造一个store对象,
同过定义state，来初始化所以的数据，也是整个应用唯一的数据源

```javascript
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foo: '123',
    bar: '456'
  }
})

```