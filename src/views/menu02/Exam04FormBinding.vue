<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam04FormBinding
    </div>
    <div class="card-body">
      <form v-on:submit.prevent="handleSubmit">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" v-model="product.price"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Info</label>
          <div class="col-sm-10">
            <textarea class="form-control" v-model="product.info"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">madeIn</label>
          <div class="col-sm-10">
            <select class="form-control" v-model="product.madeIn">
              <option value="한국">한국</option>
              <option value="미국" selected>미국</option>
              <option value="영국">영국</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Colors</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" value="black" v-model="product.colors"/>
              <label class="form-check-label">black</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" value="white" v-model="product.colors"/>
              <label class="form-check-label">white</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" value="red" v-model="product.colors"/>
              <label class="form-check-label">red</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Sale1</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="product.sale1"/>
              <label class="form-check-label">판매여부</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Sale2</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" 
                      v-model="product.sale2" true-value="yes" false-value="no"/>
              <label class="form-check-label">판매여부</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Sex</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input type="radio" class="form-check-input" value="man" v-model="product.sex"/>
              <label class="form-check-label">Man</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" value="woman" v-model="product.sex"/>
              <label class="form-check-label">Woman</label>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-info btn btn-sm mr-2" v-bind:disabled="disabledRegButton">등록</button>
          <router-link to="/" class="btn btn-info btn-sm mr-2">취소</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam04FormBinding",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      product:{
        name:"홍길동",
        company:"",
        price:0,
        colors:[],
        info:"",
        madeIn:"한국",
        sale1:false,
        sale2:"no",
        sex:"woman",
      }
    }
  },
  //컴포넌트 메소드 정의
  methods:{
    handleSubmit(){
      console.log(this.product);
    }
  },
  //데이터가 변경되면 자동 계산되는 속성
  computed:{
    disabledRegButton() {
      var result = this.product.name === "" || this.product.company === "";
      return result;
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>