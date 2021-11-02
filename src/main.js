import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//id가 app인 component를 찾아 넣어준다