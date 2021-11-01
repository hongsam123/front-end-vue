<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <p>data:{{data}}</p>
      <hr/>
       <button class="btn btn-sm btn-info mr-2" @click="handleParentData">부모 데이터 읽기</button>
      <button class="btn btn-sm btn-info mr-2" @click="handleParentMethod">부모 메소드 호출</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Child",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      data:"child-data"
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    childMethod() {
      console.log("childMethod() 실행");
    },
    handleParentData(){
      console.log(this.$parent.data);
    },
    handleParentMethod() {
      this.$parent.parentMethod;
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>