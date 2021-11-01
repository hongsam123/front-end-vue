<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="mb-2"> couter: {{counter}}</p>
      <child @child-event-1="handleChildEvent1"
             @child-event-2="handleChildEvent2"
             :counter="counter"
             @counter-increment="handleCounterIncrement"
             @counter-decrement="handleCounterDecrement"/>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam02EventEmit",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    Child,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      counter:0
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleChildEvent1(arg) {
      console.log("arg : ", arg);
    },
    handleChildEvent2(arg1,arg2) {
      console.log("arg1 : ", arg1);
      console.log("arg2 : ", arg2);
    },
    handleCounterIncrement(value) {
      this.counter += value;
    },
    handleCounterDecrement(value) {
      this.counter -= value;
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>