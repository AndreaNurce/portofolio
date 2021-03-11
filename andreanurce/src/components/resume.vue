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
                <div :key="index" v-for="(current, index) in tittle" >
                <h1 class="tittle">{{ current }} </h1>
                <div class="container">
                    <div class="logo">
                        <i :class="logoClass[index]" class="fa"></i>
                    </div>
                    <div class="content">
                        <h5 class="year">{{ year[index] }}</h5>
                        <h4 class="sub-tittle">{{field[index]}}</h4>
                        <p>{{name[index]}}</p>
                        <br>
                        <p>{{ description[index] }}</p>
                    </div>
                </div>
                <br>
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
            tittle : ["Education"," Experience"],
            logoClass : ["fa-graduation-cap" ,"fa-briefcase"],
            year : ["2020-2021","2020-2021"],
            field : ["Bachelor in Computer Science","Bachelor in Computer Science"],
            name : ["Facility of Natural Science","Facility of Natural Science"],
            description : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?"]
        }
    },
}
</script>

<style scoped>
.content{
    width : 70%;
}
.content > h5  {
    font-weight: 700;
    font-size: 16px;
    color: #222222;
} 
.content > h4  {
    font-weight: 700;
    font-size: 20px;
    color: #222222;
} 
.content> p{
    
color: #777777;
font-size: 15px;
line-height: 1.65rem;
}
.fa {      
  
    font-size: 20px;
    padding: 14px;
    width: 28px;
    height: 28px;
    text-align: center;
    text-decoration: none;
    border-radius : 50%;
}

.fa-graduation-cap{
background-color: #90acd1;
  color: white;
} 

.tittle {
    padding: 40px 0 ;
    font-size: 24px;
}
.container{
    display: flex;
    padding : 40px 24px;
    width: 100%;
    background-color: #f9f9ff;
    border-radius : 10px;
transition: all 0.3s ease 0s;

}
.container:hover {
    background-color:#90acd1;
transition: all 0.3s ease 0s;
    
}
.container:hover .fa {
    background-color:white;
transition: all 0.3s ease 0s;
    
}
.container:hover .fa-graduation-cap {
    color:black;
transition: all 0.3s ease 0s;
    
}

.container:hover > div:nth-child(2) > h4 ,
.container:hover > div:nth-child(2) > h5 ,
.container:hover > div:nth-child(2) > p {
    color:white;
transition: all 0.3s ease 0s;

}
.container:hover > {
background-color:#90acd1;
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
    display: flex ;
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
        display: block;
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