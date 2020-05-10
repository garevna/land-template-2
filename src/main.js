import Vue from 'vue'
import App from './App'

/* eslint-disable */

import vuetify from './plugins/vuetify'
Vue.use(vuetify)

import store from './store'

import '@/scss/fonts.scss'
// import '@/scss/variables.scss'
import './registerServiceWorker'

Vue.prototype.$openExternalLink = function (url) {
  window.open(url, '_blank')
}

Vue.config.productionTip = false

const vue = new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
