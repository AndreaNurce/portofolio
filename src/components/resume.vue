<template>
<div class="wrapper">
        <h1 class="resume">Resume</h1>
    <div class="container-resume" >
        <div class="sides-container">
            <div class="resume-left">
                <ul class="list">
                    <li @click="handleNav('Education')" :class="{current : tag == 'Education'}" >Education</li>
                    <li @click="handleNav('Experience')" :class="{current : tag == 'Experience'}">Experience</li>
                    <li @click="handleNav('Skills')" :class="{current : tag == 'Skills'}" >Skills</li>
                </ul>
            </div>

            <div  class="resume-right">
                <div :key="index" v-for="(current, index) in info" :id="info[index].tittle">
                    <h1 class="tittle">{{info[index].tittle}}</h1>
                    <div :key="index2" v-for="(current2, index2) in info[index].year" class="container">
                        <div class="logo">
                            <i :class="info[index].logoClass[index2]" class="fa fas"></i>
                        </div>
                        <div class="content">
                            <h5 class="year">{{ info[index].year[index2] }}</h5>
                            <h4 class="sub-tittle">{{info[index].field[index2]}}</h4>
                            <p>{{info[index].name[index2]}}</p>
                            <br>
                            <p>{{ info[index].description[index2] }}</p>
                        </div>
                    </div>
                </div>
                    <h1 class="tittle" >Skills</h1>
                <div class="skills-wrapper">
                    <div v-for="(skill ,index) in skills" :key="index" class="skills-container">
                        <div class="skill-level" :style="{width:skillLevel[index]}">
                        <h3>{{skill}}</h3>
                        <p>{{skillLevel[index]}}</p>
                        </div>
                        <div class="progress-bar-wrapper">
                            <div class="progress-bar" :style="{width:skillLevel[index]}">
                            </div>
                        </div>
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
            info : [
            {
                    tittle : 'Education',
                    year : ["2020-2021","2020-2021"],
                    logoClass : ["fa-graduation-cap","fa-graduation-cap"],
                    field : ["Bachelor in Computer Science","Bachelor in Computer Science"],
                    name : ["Facility of Natural Science","Facility of Natural Science"],
                    description : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?"]
            },{
                    tittle : 'Experience',
                    year : ["2020-2021","2020-2021"],
                    logoClass : ["fa-briefcase","fa-briefcase"],
                    field : ["Bachelor in Computer Science","Bachelor in Computer Science"],
                    name : ["Facility of Natural Science","Facility of Natural Science"],
                    description : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint eos quo placeat nihil reprehenderit, dignissimos quod voluptate ab est nemo ratione corrupti earum ea aperiam dolores eum laborum dolor?"]
            }
            ],
            skills : ["Photoshop" ,"Illustrator" , "HTML/CSS" , "Javascript" , "Vue.js","Node/Express" , "Git" , "Heroku" ,"MongoDB"],
            skillLevel : ["75%","90%","85%","75%","65%" , "50%" , "75%" , "65%" , "50%"],
            tag : ''
}

    },
        mounted() {
               this.handleResize();
    },methods: {
        handleResize(){
                this.$store.state.resume = this.$el.offsetTop;
    },
        handleNav(el){
            let education =  this.$store.state.resume + 200;
            let expreience = document.querySelector('#Experience').offsetHeight + education;
            let skills =  expreience + document.querySelector('#Education').offsetHeight  ;
            
            if(el == 'Education'){
                window.scrollTo({
                    top :education,
                    behavior : 'smooth'
                })

            }if(el == 'Experience'){
                window.scrollTo({
                    top :expreience,
                    behavior : 'smooth'
                })
            
            }if(el == 'Skills'){
                window.scrollTo({
                    top : skills,
                    behavior : 'smooth'
                })
            }
        },

        handleScroll(){
            
        let education = document.querySelector('#Education').offsetHeight ;
        let expreience = document.querySelector('#Experience').offsetHeight + education;

    
        if(window.pageYOffset > this.$store.state.resume  && window.pageYOffset < (this.$store.state.resume + education )){
                this.tag = 'Education';
        }else if(window.pageYOffset > (this.$store.state.resume + education) && window.pageYOffset < (this.$store.state.resume + expreience )){
                this.tag = 'Experience';
        }else if(window.pageYOffset > (this.$store.state.resume + expreience )){
                this.tag = 'Skills';
        }
         else{
                this.tag = '';
        }

    
}
        
    },created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

  },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

    
  }
}
</script>

<style scoped>
.skill-level{
    display: flex;
    align-items: center;
    justify-content: space-between ;
}
.skill-level > * {
font-size: 16px;
margin-bottom: 10px;
font-weight: 600;
}
.progress-bar{
        height: 6px;
    background-color: #90acd1;
    border-radius: 6px;
      position: relative;
}
.progress-bar::after{
margin-top:-2px;
position: absolute;
width: 10px;
height: 10px;
content: "";
background: #90acd1;
border-radius: 11px;
right: 0;


}
.progress-bar-wrapper{
    height: 6px;
    background-color: #e6e6e6;
    border-radius: 6px;
}
.skills-container{
    width: 44%;
    margin-right: 6%;
    padding : 20px 0;
    
}
.skills-wrapper{
display: flex;
flex-wrap: wrap;
width: 100%;
}

.content{
width : 70%;
transition: all 0.3s ease 0s;

}
.content > h5  {
font-weight: 700;
font-size: 16px;
color: #222222;
transition: all 0.3s ease 0s;

} 
.content > h4  {
font-weight: 700;
font-size: 20px;
color: #222222;
transition: all 0.3s ease 0s;

} 
.content> p{
transition: all 0.3s ease 0s;
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
transition: all 0.3s ease 0s;

}

.fa-graduation-cap   , .fa-briefcase{
background-color: #90acd1;
color: white;
transition: all 0.3s ease 0s;

} 


.tittle {
font-size: 24px;
padding: 20px 0;

}
.container{
display: flex;
padding : 40px 24px;
margin: 30px 0;
width: 90%;
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
.container:hover .fa-graduation-cap   {
color:black;
transition: all 0.3s ease 0s;

}

.container:hover  .fa-briefcase {
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
position: relative;

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
transform: translateX(-50%);
background: #e45447;
position: absolute;
margin-top: 100px;
}
.resume::after{
content: "";
position: absolute;
left: 50%;
background: #e45447;
margin-top: 96px;
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
padding: 20px 0;
}
.list{
position: sticky;
top :150px;
list-style: none;
transition: all 0.3s ease 0s;

}
li{
font-weight: 700;
margin-bottom: 10px;
transition: all 0.3s ease 0s;

}
.resume-right{
width: 100%;
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
@media screen and (max-width :735px ) {
    .resume-left{
        display: none;
    }
    .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease 0s;
}
}
@media screen and (max-width :568px ) {
.skills-wrapper{
    flex-direction: column;
    align-items: center;
}
.skills-container{
    width: 100%;
}
}
</style>