import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './grid-ui/global.base.scss'
import './grid-ui/grid.base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
