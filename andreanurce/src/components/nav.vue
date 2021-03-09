<template>
  <div class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <ul>
              <a href="#Home" > <li>Home</li></a>
              <a href="#Service"> <li>Service</li></a>
              <a href="#About"> <li>About</li></a>
              <a href="#Resume"> <li>Resume</li></a>
              <a href="#Works"> <li>Works</li></a>
              <a href="#Blog"> <li>Blog</li></a>
              <a href="#Contact"> <li>Contact</li></a>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

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
    padding: 25px 16px;
    font-weight: 400;
    display: inline-block;
    font-size: 16px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
    width: 60px;
    text-align: center;

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
width: 92px;
transition: all 0.3s ease 0s;
}


</style> >

