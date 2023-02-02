import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AboutUs from './components/AboutUs.vue'

const router = new VueRouter({
   
    mode: 'history',
    routes: [
        {
          path: '/about-us',
          name: 'about-us', 
          component: AboutUs
        }
    ]
});

export default router;