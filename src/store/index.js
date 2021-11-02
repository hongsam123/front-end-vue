import Vue from 'vue'
import Vuex from 'vuex'
import counter from "./counter.js"

Vue.use(Vuex)

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: ""
  },
  //루트 상태 값 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state) {
      return state.userId;
    }
  },
  //루트 상태 값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    }
  },
  //루트 상태 값을 변경하는 비동기 메소드 정의(Setter)
  actions: {
    setUserIdbyAsync(context, payload) { //payload = {userId:xxx, duration:3000}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration); //3초가 지난 후 실행
      }).then((data) =>{ //정상 실행 시
        console.log("userId 상태 변경 성공: " + data);
      }).catch((err) => { //에러 발생 시
        console.log("UserId 상태 변경 실패");
      });
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈 가져오기
  modules: {
    counter
  }
});