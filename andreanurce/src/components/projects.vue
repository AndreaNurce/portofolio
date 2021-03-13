<template>
  <div class="projects-container">
      <h1 >
          My Projects
      </h1>
      <div class="wrapper">
      <div class="img-wrapper">
          <div  :key="index" v-for="(item,index) in  items" class="img-container">
             <div class="image" :style="{backgroundImage: 'url('+require('../assets/'+item)+')'}"></div>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items : ["project3.png","project2.png","project1.png","project0.png"],
            
        }
    },

}
</script>

<style scoped>
.as{
    height:30px;
    width: 30px;
    background-color: tomato;
}
.as:hover h1{
    opacity: 0;
}

a{
    position: absolute;
    text-decoration: none;
    color: white;
    font-weight: 900;

}

.wrapper{
    display: flex;
    justify-content: center;
    transition: all 0.3s ease 0s;

}

.img-wrapper{
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
    width: 85%;
    transition: all 0.3s ease 0s;

}
.img-container{
    transition: all 0.3s ease 0s;
    position: relative;
}
.img-container {
padding: 30px;
}
.image{
    width : 350px;
    height: 180px;
    transition: all 0.3s ease 0s;
    box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
    position: relative; 
     background-size: cover;
}
.image:hover{
    transform: scale(1.1);
    transition: all 0.3s ease 0s;


}
.image::after{
content: "visit site";
position: absolute;
opacity: 0;
right: 0;
top: 0;
transition: all 0.3s ease 0s;
color: white;
font-weight: 600;

}
.image::before{
content: "";
position: absolute;
width: 100%;
height: 100%;
background-color: #e45447;
opacity: .8;
z-index: -1;
right: 0;
top: 0;
transition: all 0.3s ease 0s;


}
.image:hover::before{
right: -30px;
top: 30px;
z-index: 1;
transition: all 0.3s ease 0s;

}
.image:hover::after{
right: 40%;
top: 60%;
opacity: 1;
transition: all 0.3s ease 0s;
 filter: brightness(1);
 z-index: 2;

}

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