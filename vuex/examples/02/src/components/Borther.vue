<template>
  <div>{{count}}
  <p>{{countPlusLocalState}}</p>
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
    // 箭头函数可使代码更简练
    // 传字符串参数 'count' 等同于 `state => state.count`
    count: 'bar',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>
<style>
</style>
