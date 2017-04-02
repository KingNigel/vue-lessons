<template>
  <div>{{count}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.foo
    }
  }
}
</script>
<style>
</style>
