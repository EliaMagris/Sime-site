import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import specific icons /
import {faPhone} from '@fortawesome/free-solid-svg-icons';

import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

// Import icone regular /
import {} from '@fortawesome/free-regular-svg-icons';

// add icons to the library /
library.add(faWhatsapp, faPhone);

// add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

window.Vue = require('vue');


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
