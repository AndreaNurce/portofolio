<template>
  <div id="app">
    <div @click="scroll()"  class="navigation">
      <i class="fas fa-chevron-up"></i>
    </div>
    <home/>
    <navBar/>
    <services/>
    <about/>
    <resume/>
    <projects/>
    <contact/>
    <bottom/>
  </div>
</template>

<script>
import navBar from './components/nav'
import home from './components/home'
import services from './components/services'
import About from './components/about'
import resume from './components/resume'
import projects from './components/projects'
import contact from './components/contact'
import bottom from './components/bottom.vue'


export default {
  components :  {
    navBar,
    home,
    services,
    About,
    resume,
    projects,
    contact,
    bottom
  },methods: {
    scroll : ()=>{
      window.scroll({
      top: 0,
      behavior: 'smooth'
      });

    }

    
  }
}
</script>

<style scoped>
.fas{
  color: white;
  font-size: 32px;
  background-color:#90acd1;
  position: fixed;
  z-index: 5;
  right: 0;
  bottom: 0;
  margin: 20px;
  padding: 8px 10px;
  border-radius:509px;
}


</style>
