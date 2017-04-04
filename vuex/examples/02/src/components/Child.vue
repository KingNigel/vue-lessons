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
<style>
</style>
