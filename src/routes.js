import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AboutUs from './components/pages/AboutUs.vue'
import MainSim from './components/MainSim.vue'

const router = new VueRouter({
   
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: MainSim
    },
        {
          path: '/about-us',
          name: 'about-us', 
          component: AboutUs,
        }
    ]
});

export default router;