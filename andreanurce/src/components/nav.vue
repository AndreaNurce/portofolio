<template>

  <div id="main-bar" class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <ul>
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
            tag : "home"
        }
    },
       methods: {
        scrollToTag  (el){
            this.tag = el;
            let pos =  eval('this.$store.state.'+el )
            console.log(pos);
            window.scrollTo({
                top : pos - 100,
                behavior : 'smooth'
            })

}
,
handleScroll () {
        if(window.pageYOffset > 135){
            document.querySelector('#main-bar').style.position = "fixed";
            document.querySelector('#main-bar').style.backgroundColor = "white";
            document.querySelector('#main-bar').style.boxShadow = " 0px 0px 40px 0px rgba(85, 128, 255, 0.2)";
        }else{
            document.querySelector('#main-bar').style.position = "absolute";
            document.querySelector('#main-bar').style.backgroundColor = "#F9F9FF";
            document.querySelector('#main-bar').style.boxShadow = "none";
        }
    }
}
  ,mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    
  }
}
</script>

<style scoped>

.main-bar{
    position:fixed;
    top: 0;
    z-index: 1;
    width: 100% ;
    height: 80px;
   display: flex;
   justify-content: center;
   background-color: #F9F9FF;
    transition: all 0.5s ease 0s;

}

.nav-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width : 75%;
}
li{
    color: #222222;
    font-weight: 400;
    padding: 25px 12px;
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

