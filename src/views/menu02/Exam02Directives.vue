<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!--데이터 바인딩-->
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" height="100"/>
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </div>

      <hr/>
      <!--요소 숨김 여부-->
      <span v-if="sale" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </span>
      <span v-show="sale">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </span>
      <!--HTML 태그 처리-->
      <p>정보 : {{info}} </p>
      <p>정보 : <span v-html="info"></span> </p>
      <hr/>
      <button class="btn btn-sm btn-info mr-2" @click="changeData">변경</button>
    
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam02Directives",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      photoFileName:"photo2.jpg",
      sale : true,
      info : `<div style="background-color:#eeeeee">스타일 적용 하기</div>`,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    changeData() {
      if(this.photoFileName === "photo2.jpg") {
        this.photoFileName = "photo3.jpg";
      }else {
        this.photoFileName = "photo2.jpg";
      }
      this.sale = !this.sale;
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>