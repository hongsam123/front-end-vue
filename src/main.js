import Vue from 'vue'
import App from '@/App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
//id가 app인 component를 찾아 넣어준다