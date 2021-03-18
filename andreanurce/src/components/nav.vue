<template>

  <div id="main-bar" class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <ul>
              <a href="#Home" @click="scrollToTag('Home') "  :class="{active: tag == 'Home' }"  > <li>Home</li></a>
              <a href="#Service" @click=" scrollToTag('Service')" :class="{active: tag == 'Service' }" > <li>Service</li></a>
              <a href="#About"  @click="scrollToTag('About')" :class="{active: tag == 'About' }" > <li>About</li></a>
              <a href="#Resume"  @click="scrollToTag('Resume')" :class="{active: tag == 'Resume' }" > <li>Resume</li></a>
              <a href="#Works"  @click="scrollToTag('Works')" :class="{active: tag == 'Works' }" > <li>Works</li></a>
              <a href="#Contact"  @click="scrollToTag('Contact')" :class="{active: tag == 'Contact' }"  > <li>Contact</li></a>
          </ul>
      </div>
  </div>

</template>

<script>
export default {
    data() {
        return {
            tag : "Home"
        }
    },
       methods: {
        scrollToTag  (el){
            this.tag = el;
            if(el == 'Home' ){
            window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
            })
           }if(el == 'Service' ){
            window.scrollTo({
            top: 750, 
            behavior: 'smooth' 
            })
           }if(el == 'About' ){
            window.scrollTo({
            top: 1700, 
            behavior: 'smooth' 
            })
           }if(el == 'Resume' ){
            window.scrollTo({
            top: 2510, 
            behavior: 'smooth' 
            })
           }if(el == 'Works' ){
            window.scrollTo({
            top: 5423, 
            behavior: 'smooth' 
            })
           }if(el == 'Contact' ){
            window.scrollTo({
            top: 6420, 
            behavior: 'smooth' 
            })
           }
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

        if(window.pageYOffset < 740){
            this.tag = 'Home';
        }if(window.pageYOffset >= 740 && window.pageYOffset < 1700 ){
            this.tag = 'Service';
        }if(window.pageYOffset >= 1700 && window.pageYOffset < 2510 ){
            this.tag = 'About';
        }if(window.pageYOffset >= 2510 && window.pageYOffset < 5423 ){
            this.tag = 'Resume';
        }if(window.pageYOffset >= 5423 && window.pageYOffset < 6420){
            this.tag = 'Works';
        }if(window.pageYOffset >= 6100  ){
            this.tag = 'Contact';
        }
    }
  },mounted () {
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

