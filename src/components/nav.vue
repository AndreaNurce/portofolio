<template>

  <div  data-aos="fade-down" data-aos-duration="900"  id="main-bar" class="main-bar" >
      <div class="nav-bar">
          <a href=""><img  style="width:64px;padding:2px;cursor:pointer;" src="../assets/logo.png" alt=""></a> 
          <i  class="fas fa-bars"></i>
          <ul class="list" >
              <a  @click="scrollToTag('home')"  :class="{active: tag == 'home' }"  > <li>Home</li></a>
              <a  @click=" scrollToTag('services')" :class="{active: tag == 'services' }" > <li>Service</li></a>
              <a  @click="scrollToTag('about')" :class="{active: tag == 'about' }" > <li>About</li></a>
              <a  @click="scrollToTag('resume')" :class="{active: tag == 'resume' }" > <li>Resume</li></a>
              <a  @click="scrollToTag('projects')" :class="{active: tag == 'projects' }" > <li>Works</li></a>
              <a  @click="scrollToTag('contact')" :class="{active: tag == 'contact' }"  > <li>Contact</li></a>
          </ul>
          
      </div>
  </div>

</template>

<script>
export default {
    data() {
        return {
            tag : "home",
            check : false
        }
    },
       methods: {

        scrollToTag  (el){
            this.tag = el;
            let pos =  eval('this.$store.state.'+el )
            window.scrollTo({
                top : pos,
                behavior : 'smooth'
            })


}
,
handleScroll () {
        if(window.pageYOffset > 135){
            document.querySelector('#main-bar').style.position = "fixed";
            document.querySelector('#main-bar').style.backgroundColor = "white";
            document.querySelector('.nav-bar').style.backgroundColor = "white";
            document.querySelector('#main-bar').style.boxShadow = " 0px 0px 40px 0px rgba(85, 128, 255, 0.2)";
        }else{
            document.querySelector('#main-bar').style.position = "absolute";
            document.querySelector('#main-bar').style.backgroundColor = "#F9F9FF";
            document.querySelector('.nav-bar').style.backgroundColor = "#F9F9FF";
            document.querySelector('#main-bar').style.boxShadow = "none";
        }

        
        if(window.pageYOffset +200 >= this.$store.state.home && window.pageYOffset < this.$store.state.services){
            this.tag = 'home'
        } if(window.pageYOffset  +200 >= this.$store.state.services && window.pageYOffset < this.$store.state.about){
            this.tag = 'services'
        }if(window.pageYOffset +200 >= this.$store.state.about && window.pageYOffset < this.$store.state.resume){
            this.tag = 'about'
        }if(window.pageYOffset  +200>= this.$store.state.resume && window.pageYOffset < this.$store.state.projects){
            this.tag = 'resume'
        }if(window.pageYOffset +200 >= this.$store.state.projects && window.pageYOffset < this.$store.state.contact){
            this.tag = 'projects'
        }if(window.pageYOffset+200 >= this.$store.state.contact){
            this.tag = 'contact'
        }

    }
}
  ,created () {
    window.addEventListener('scroll', this.handleScroll);

  },mounted() {
    this.handleScroll();
      
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    
  }
}
</script>

<style scoped>

i{
    transition: all 0.3s ease 0s;
    display: none;
}

.main-bar{
    position:fixed;
    top: 0;
    z-index: 100;
    width: 100% ;
    height: 80px;
   display: flex;
   justify-content: center;
   background-color: #F9F9FF;
    transition: all 0.3s ease 0s;

}

.nav-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width : 80%;
   background-color: #F9F9FF;
    transition: all 0.5s ease 0s;


}

li{
    color: #222222;
    font-weight: 400;
    padding: 25px 8px;
    font-weight: 400;
    display: inline-block;
    font-size: 16px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
    width: 60px;
    text-align: center;

}
ul > a {
    padding : 0 5px;
    outline: none;
    transition: all 0.5s ease 0s;
    cursor : pointer;
}
ul > a::before{
position: absolute;
content: "";
bottom: 14px;
background: #e45447;
height: 1px;
width: 0px;
height: 2px; 
transition: all 0.3s ease 0s;
}
ul > a:hover::before{
width: 84px;
transition: all 0.3s ease 0s;
}
.active > li{
    font-weight: bolder;
}
.active::before{
    position: absolute;
content: "";
bottom: 14px;
background: #e45447;
height: 1px;
width: 84px;
height: 2px; 
transition: all 0.3s ease 0s;
 font-weight: bolder;
}



</style> >

