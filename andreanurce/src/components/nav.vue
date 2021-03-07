<template>
  <div class="main-bar" >
      <div class="nav-bar" >
          <img style="width : 64px;padding:2px;" src="../assets/logo.png" alt="">
          <ul>
              <a href="#Home" > <li class="li">Home</li></a>
              <a href="#Service"> <li class="li">Service</li></a>
              <a href="#About"> <li class="li">About</li></a>
              <a href="#Resume"> <li class="li">Resume</li></a>
              <a href="#Works"> <li class="li">Works</li></a>
              <a href="#Blog"> <li class="li">Blog</li></a>
              <a href="#Contact"> <li class="li">Contact</li></a>
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
   display: flex;
   justify-content: center;
   background-color: transparent;
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
    font-size: 18px;
    text-transform: capitalize;
    font-family: "Roboto";
    border-bottom: 0px transparent;
    transition: .3s ease-in-out;
    box-sizing: content-box;

}
li:hover{
     border-bottom: 1px solid #e45447;
}
</style> >

