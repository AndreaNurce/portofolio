<template>
  <div class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <ul>
              <a href="#Home"  :class="{active: tag == 'Home' }"  > <li>Home</li></a>
              <a href="#Service" :class="{active: tag == 'Service' }" > <li>Service</li></a>
              <a href="#About" :class="{active: tag == 'About' }" > <li>About</li></a>
              <a href="#Resume" :class="{active: tag == 'Resume' }" > <li>Resume</li></a>
              <a href="#Works" :class="{active: tag == 'Works' }" > <li>Works</li></a>
              <a href="#Blog" :class="{active: tag == 'Blog' }" > <li>Blog</li></a>
              <a href="#Contact"> <li>Contact</li></a>
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
}
</script>

<style scoped>
.main-bar{
    position:absolute;
    top: 0;
    z-index: 1;
    width: 100% ;
    height: 80px;
   display: flex;
   justify-content: center;
   background-color: #F9F9FF;
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
.active::before{
    position: absolute;
content: "";
bottom: 14px;
background: #e45447;
height: 1px;
width: 84px;
height: 2px; 
transition: all 0.3s ease 0s;
}


</style> >

