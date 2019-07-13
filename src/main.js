import Vue from 'vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// local module
import '@/registerServiceWorker'
import './plugins/Vuetify'
import './plugins/SweetAlert'
import './plugins/LocalStorage'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

Vue.config.productionTip = false

const mitanium = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

mitanium.isLoaded || window.addEventListener('load', () => {
  mitanium.isLoaded = true
  console.log('Website load')
})
