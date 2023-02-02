<template>
  <div id="app"> 
    <router-view></router-view>
    <HeaderSim/>
    <MainSim/>
      
  </div>
</template>

<script>
import HeaderSim from './components/HeaderSim.vue'
import MainSim from './components/MainSim.vue'

export default {
  name: 'App',
  components: {
    HeaderSim,
    MainSim
  }
}
</script>

<style lang="scss">
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
</style>
