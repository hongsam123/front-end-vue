<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <h6>[자식 -> 부모]</h6>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">child-event-1 emit</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">child-event-2 emit</button>
      <hr/>
      <h6>[부모 -> 자식 -> 부모 -> 자식]</h6>
      <p class="mb-2">부모로부터 받은 counter: {{counter}}</p>
      <button class="btn btn-sm btn-info mr-2" @click="handleBtn3">counter 증가요청 (자식 -> 부모)</button>
      <button class="btn btn-sm btn-info mr-2" @click="handleBtn4">counter 감소요청 (자식 -> 부모)</button>
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
      data1:"child-value1",
      data2:100,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleBtn1() {
      //이벤트 발생
      this.$emit("child-event-1", this.data1);
    },
    handleBtn2() {
      //이벤트 발생
      this.$emit("child-event-2", this.data1,this.data2);
    },
    handleBtn3() {
      //이벤트 발생
      this.$emit("counter-increment", 10);
    },
    handleBtn4() {
      //이벤트 발생
      this.$emit("counter-decrement", 10);
    },
  },
  props:["counter"]
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>