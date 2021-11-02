<template>
  <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2"/>Vue.js
    </router-link>
    <div>
      <router-link v-if="$store.state.userId===''" to="/menu07/auth/jwtauth" class="btn btn-success btn-sm">로그인</router-link>
      <button v-if="$store.state.userId!==''" class="btn btn-danger btn-sm" @click="handleLogout">로그아웃</button>
    </div>
  </nav>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"AppHeader",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleLogout() {
      this.$store.dispatch("deleteAuth");
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>