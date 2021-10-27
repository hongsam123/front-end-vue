<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02View
  </div>
  <div class="card-body">
    <sub-a-component class="mb-2"/>
      <!--프로그램 방식 화면 이동-->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl"> /menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()"> /menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl"> /menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()"> /menu01/exam01view</button>
  </div>
  </div>
</template>

<script>
import SubAComponent from "./SubAComponent"
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"exam02view",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    SubAComponent
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    goUrl() {
      this.$router.push("/menu01/exam01view");
      //현재 url과 동일한 url로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
      //this.$router.push("/menu01/exam02view").catch(()=>{});

      //this.$router.push({path: "/menu01/exam01view"});
      //this.$router.push({path: "menu01_exam01view"});
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>