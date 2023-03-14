<template>
  
  <div id="app"> 
 
    <HeaderSim/>
    <router-view class="pt-5"></router-view>
      
  </div>
</template>

<script>
import HeaderSim from './components/HeaderSim.vue'

export default {
  name: 'App',
  components: {
    HeaderSim,
  }
}
</script>

<style lang="scss">
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
*{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
</style>
