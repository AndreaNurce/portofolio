<template>
  <div class="container-about" >
      <div class="sides-container">
        <div class="about-left">
            <img src="../assets/Untitled-1.png" style="width:500px" alt="">
        </div>
        <div class="about-right">
            <h1>About Me</h1>
            <p>I’m a Front End Developer. I have a Passion for Creating Clean, Beautiful, Interactive, Minimalistic, Responsive and User Friendly UI, Developed by Modular, Scalable and Functional Code. </p>
            <ul>
                <li><span>Name : </span> <span> Andrea Nurçe</span> </li>
                <li><span>Date of Birth : </span> <span> August 20 ,2002</span> </li>
                <li><span>Country : </span> <span> Albania</span> </li>
                <li><span>Email : </span> <span> nurceandrea2@gmail.com</span>  </li>
                <li><span>Education : </span> <span> Student</span> </li>
            </ul>
            <div class="download"><p>Download CV</p></div>
        </div>
        </div>
        <br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li{
    padding: 10px 0;
    display: flex;
    

}
.about-right > p{
        font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
line-height: 1.625em;
}
li span:nth-child(1){

font-size: 16px;
font-weight: bolder;
color: #222222;
width: 150px;
}
li span:nth-child(2){
    font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
line-height: 1.625em;
}
.download > p{
    margin-top:30px;
    background: #90acd1;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 0;
    padding: 30px 44px;
    border-radius: 50px;
    transition:  0.3s linear;

}.download > p:hover{
    background-color: #E45447;
}
.container-about{
    padding-top : 30px;
    height: 100vh;
    background-color: #F9F9FF;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sides-container{
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.about-left{
    width: 600px;
    font-weight: 400;
}
.about-right{
    width: 500px;
}
.about-right > h1::before{
bottom: -31px;
width: 100px;
height: 2px;    
left: 0;
content: "";
position: absolute;
background: #e45447;
}
.about-right > h1::after{
bottom: -35px;
width: 10px;
height: 10px;
left: 0;
border-radius: 8px;
content: "";
position: absolute; 
background: #e45447;
}
.about-right > h1{
    color: #222222;
font-weight: 700;
position: relative;
margin-bottom: 70px;
font-size: 45px;
line-height: 44px;
}

.about-left>*{
    padding: 10px 0;
}
.about-left>h3{
    color:#ABD4FC;
    font-size: 16px;
}
.about-left>h1{
    font-size: 60px  ;
}.about-left>h2{
    font-size: 30px  ;
    color: #e45447;

}.about-left>p{
    font-size: 13px  ;
    color: #777777;

}
</style>