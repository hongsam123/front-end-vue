import Vue from 'vue'
import Vuex from 'vuex'
import counter from "./counter.js"
import axiosConfig from "@/apis/axiosConfig";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: "",
    authToken:""
  },
  //루트 상태 값 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    }
  },
  //루트 상태 값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state,payload) {
      state.authToken = payload;
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
    },
    saveAuth(context,payload){    //payload = {userId:xxx, authToken:3000}
      //상태 저장
      context.commit("setUserId",payload.userId);
      context.commit("setAuthToken",payload.authToken);
      //브라우저 리프레시때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId",payload.userId);
      sessionStorage.setItem("authToken",payload.authToken);
      //로그인 성공 후, Axios의 공통 헤더에 Authorization을 추가
      axiosConfig.addAuthHeader(payload.authToken);
    },
    loadAuth(context, payload) {
      //세션 스토리지에 저장된 내용을 읽어서 상태 복원
      context.commit("setUserId",sessionStorage.getItem("userId") || ""); //앞의 값이 false를 가지면 뒤의 값을 가진다
      context.commit("setAuthToken",sessionStorage.getItem("authToken"||""));
      //authToken이 있을 경우, Axios의 공통 헤더에 Authorization을 추가
      if(context.state.authToken!==""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },
    deleteAuth(context,payload) {
      //상태 제거
      context.commit("setUserId","");
      context.commit("setAuthToken","");
      //세션 스토리지 제거
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      //Axios의 공통 헤더에 Authorization을 제거
      axiosConfig.removeAuthHeader();
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈 가져오기
  modules: {
    counter
  }
});