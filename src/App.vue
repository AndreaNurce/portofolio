<template>
  <div id="app">
    <div 
     v-if="isLoading"
     class="spinnerContainer">
    <breeding-rhombus-spinner
  :animation-duration="3000"
  :size="200"
  color="#90acd1"
/></div>
<div v-if="!isLoading" >
    <div @click="scroll()"  class="navigation">
      <i class="fas fa-chevron-up"></i>
    </div>
    <navBar v-if="mobile"></navBar>
    <navMobile  v-if="!mobile" />
    <home/>
    <services/>
    <about/>
    <resume/>
    <projects/>
    <contact/>
    <bottom/>
    </div>
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
import navMobile from './components/navMobile.vue'
import { BreedingRhombusSpinner } from 'epic-spinners'



export default {
  data() {
    return {
      mobile : true ,
      isLoading : true
    }
  },
  components :  {
    navBar,
    home,
    services,
    About,
    resume,
    projects,
    contact,
    bottom,
    navMobile,
    BreedingRhombusSpinner,
  },methods: {
    scroll : ()=>{
      window.scroll({
      top: 0,
      behavior: 'smooth'
      });
            
    }

  ,
    handleScroll () {
       if(window.pageYOffset > 500){
          document.querySelector('.fas').style.display = 'block'
       }else {
      document.querySelector('.fas').style.display = 'none'
       }
},handleNav(){
  if(window.innerWidth >= 768 ){
    this.mobile = true
  }else{
    this.mobile = false
  }
}}
  ,created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleNav);
    this.handleNav();

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);


    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleNav);

    
  }
}

</script>

<style scoped>
.spinnerContainer{
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;


}
.fas{
  display:none;
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
  transition: all 0.3s ease 0s;
  cursor:pointer;
}



</style>
