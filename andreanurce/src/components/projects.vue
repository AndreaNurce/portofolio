<template>
  <div class="projects-container">
      <h1>
          My Projects
      </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.projects-container{
    padding : 60px 0;
    background-color: #F9F9FF;
}
.projects-container > h1{
    color: #222222;
font-weight: 700;
position: relative;
font-size: 45px;
line-height: 44px;
text-align: center;
margin-bottom: 70px;
} 
.projects-container > h1::before{
width: 100px;
height: 2px;    
content: "";
left: 50%;
transform: translateX(-50%);
background: #e45447;
position: absolute;
margin-top: 100px;

} 
.projects-container > h1::after{
margin-top: 96px;

width: 10px;
height: 10px;
border-radius: 8px;
content: "";
position: absolute; 
background: #e45447;
left: 50%;
transform: translateX(-50%);
}


</style>