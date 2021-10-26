<template>
<<<<<<< HEAD
  <div id="app" class="d-flex flex-column vh-100">
    <AppHeader/>
    <div class="flex-grow-1 container-fluid">
      <div class="row h-100">
        <div class="col-md-6 col-lg-4 p-3 bg-dark">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1" style="height:0px; overflowY:auto; overflowX:hidden">
              <app-menu/>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-8 p-3">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 overflow-auto pr-3" style="height:0px">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
=======
  <div id="app">
    <div id="nav">
      <!--SPA방식-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <!--MPA방식-->
      <!--<a href="/">Home</a>-->
>>>>>>> 8716588... test commit
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMenu from "./components/AppMenu"

export default {
  name:"App", 
  components: {
    AppHeader,
    AppMenu,
  }
}
</script>


