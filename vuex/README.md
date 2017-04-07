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

1.在main.js中引入vuex,构造一个store对象,
同过定义state，来初始化所以的数据，也是整个应用唯一的数据源，
在vue的实例中加入store对象

```javascript
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foo: '123',
    bar: '456'
  }
})
new Vue({
  el: '#app',
  //加入store对象
  store,
  template: '<App/>',
  components: { App }
})

```
2.在组件中获取state
- 通过$store.state获取state里面的状态
```
<template>
  <div>{{count}}
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.foo
    }
  }
}
</script>
```
- 通过mapState辅助函数
```
<template>
  <div>
  {{count1}}
  </div>
  <div>
  {{count2}}
  </div>
  <div>
  {{count3}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      localCount: 'dsfdsgf'
    }
  },
  computed: mapState({
     //1.通过辅助函数可以将state当参数传入计算属性中的函数
     // 箭头函数可使代码更简练
    // 传字符串参数 'count' 等同于 `state => state.count`
     count1:
  
    count2: 'bar',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    count3 (state) {
      return state.count + this.localCount
    }
  })
}
</script>
```