import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

window.Vue = require('vue');



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
