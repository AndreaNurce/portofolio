<template>
<div class="wrapper">
        <h1 class="resume">Resume</h1>
    <div class="container-resume" >
        <div class="sides-container">
            <div class="resume-left">
                <ul>
                    <li >Education</li>
                    <li class="current">Experience</li>
                    <li>Skills</li>
                    <li>Award</li>
                </ul>

            </div>
            <div class="resume-right">
                <h1>Education </h1>
                <div class="container">
                    <div class="logo">
                        <img src="../assets/4.png" height="50px" alt="">
                    </div>
                    <div class="content">
                        <h3>2014-2015</h3>
                        <h2>Bachelor in Computer Science</h2>
                        <p>Facility of natural science</p>
                        <br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo, in unde perferendis placeat eaque numquam asperiores laborum repellendus velit accusantium maxime! Ea repellendus iusto consectetur. Molestias reprehenderit ipsum libero.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.resume-right > h1 {
    padding: 24px 0 ;
}
.container{
    display: flex;
    padding : 24px 24px;
    width: 100%;
    background-color: #f9f9ff;
    border-radius : 10px;
}
.container > div {
    padding :0 12px;
}
.container > div:nth-child(2) > * {
    padding: 5px 0;
}
.container-resume{
    display: flex;
    justify-content: center;

}
.wrapper{
        padding: 100px 0;
}
.wrapper > h1{
    text-align: center;
    font-size:45px;
}
.resume::before{
width: 100px;
height: 2px;    
content: "";
left: 50%;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
background: #e45447;
position: absolute;
margin-top: 100px;
}
.resume::after{
content: "";
position: absolute;
left: 50%;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
background: #e45447;
margin-top: 95px;
width: 10px;
height: 10px;
border-radius: 8px;
}
.sides-container{
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
}
.resume-left{
    width: 30%;
    font-weight: 400;
}
ul{
    list-style: none;
transition: all 0.3s ease 0s;

}
li{
    font-weight: 700;
margin-bottom: 10px;
transition: all 0.3s ease 0s;

}
.resume-right{
        width: 70%;
}
.current{
    margin-left: 25px;
    color:#90acd1 ;
    transition: all 0.3s ease 0s;

}

.current::before {
    position: absolute;
    margin-top:13.5px;
    width: 20px;
    height: 2px;
    content: "";
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    transform: translatex(-25px);
    background: #90acd1;
    transition: all 0.3s ease 0s;

}

</style>