<!--컴포넌트 UI 정의-->
<template>
  <modal-dialog-template>
    <template v-slot:header> 
      DialogA
    </template>

    <template v-slot:body>
      <p>DialogA 내용입니다.</p>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm mr-2" @click="$emit('close')">확인</button>
      <button class="btn btn-info btn-sm mr-2" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from '@/components/menu02/ModalDialogTemplate.vue';
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"DialogA",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    ModalDialogTemplate
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
</style>