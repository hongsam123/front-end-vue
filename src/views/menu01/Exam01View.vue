<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      <span class="title">Exam01View</span>
    </div>
  <div class="card-body">
    <h6>선언적 방식 네비게이션</h6>
    <router-link to="/menu01/exam02view" class="btn btn-info btn-sm mr-2">/menu01/exam02view</router-link>
    <router-link v-bind:to="`/menu01/exam02view`" class="btn btn-info btn-sm mr-2">/menu01/exam02view</router-link>
    <router-link :to="{path:'/menu01/exam02view'}" class="btn btn-info btn-sm mr-2">/menu01/exam02view</router-link>
    <router-link :to="{name:'menu01_exam02view'}" class="btn btn-info btn-sm mr-2">/menu01/exam02view</router-link>
  </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam01View",
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
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>
.title{
  color:green
}
</style>