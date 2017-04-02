<template>
  <div>
  <child></child>
  <borther></borther>
  </div>
</template>

<script>
import child from './Child'
import borther from './Borther'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    child,
    borther
  }
}
</script>
<style>
</style>
