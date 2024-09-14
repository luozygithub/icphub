import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  "./assets/css/index.css"
import  i18n from "./i18n/index"
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
