<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      ChildC
    </div>
    <div class="card-body">
      <p>provideData1:{{provideData1}}</p>
      <p>provideData2:{{provideData2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"ChildC",
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
  },
  //부모로부터 전달된 데이터의 삽입
  inject:[
    "provideData1",
    "provideData2",
  ]
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>