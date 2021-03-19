<template>

  <div id="main-bar" class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <i  @click="show()" class="fas fa-bars"></i>
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
            check : false,
            showKey : true,
        }
    },
       methods: {
           show(){
               if(this.showKey){
            document.querySelector('.list').style.marginTop = "80px";
            this.showKey = !this.showKey
               }else{
            document.querySelector('.list').style.marginTop = "-100%";
            this.showKey = !this.showKey
               }
           },

        scrollToTag  (el){
            this.show();
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
.fa-bars{
    font-size: 32px;
}

i{
    transition: all 0.5s ease 0s;
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
    transition: all 0.5s ease 0s;

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
    position: relative;
    color: #222222;
    font-weight: 400;
    padding: 25px 8px;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-right : 50%;

}

.list{
margin-top: -100%;
transition: all 0.5s ease 0s;
position: absolute;
top : 0px;
background-color: white;
right: 50%;
width : 80%;
transform: translateX(50%);
z-index: -1000;
list-style: none;
}
ul > a {
    padding : 0 5px;
    outline: none;
    transition: all 0.5s ease 0s;
    cursor : pointer;
}
.active > li{
    font-weight: bolder;
}
</style> >

