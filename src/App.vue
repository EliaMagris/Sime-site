<template>
  <div id="app"> 
    <HeaderSim msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HeaderSim from './components/HeaderSim.vue'

export default {
  name: 'App',
  components: {
    HeaderSim
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
