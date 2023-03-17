<template>
  <div id="app"> 
    <HeaderSim/>
    <router-view v-slot="{Component}" class="pt-5">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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

.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: ass 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.3s ease-in;
}
</style>
