<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam08View
    </div>
    <div class="card-body">
      <div>kind:{{$route.query.kind}}</div>
      <div>color:{{$route.query.color}}</div>
      <div>kind:{{kind}}</div>
      <div>color:{{color}}</div>

      <hr/>

      <button class="btn btn-info btn-sm  mr-2" @click="goHome">홈으로 이동</button>
      <button class="btn btn-info btn-sm  mr-2" @click="goBack">뒤로 이동</button>

    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam08View",
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
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      //바로 직전 url로 이동
      this.$router.go(-1);
    }
  },
  //컴포넌트가 생성된 후 실행되는 메서드
  created(){
    console.log(this.$route);
    console.log(this.$route.query.kind);
    console.log(this.$route.query.color);
  },
  props:[
    "kind",
    "color"
  ]
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>