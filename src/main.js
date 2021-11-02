import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

//Axios 설정 파일을 가져오면서 실행하기
//axios.defaults.baseURL을 먼저 적용
import axios from "./apis/axiosConfig"

//개발시에 프로덕션과 관련한 팁을 출력하지 않음
Vue.config.productionTip = false

//Vue 객체 생성
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//id가 app인 component를 찾아 넣어준다