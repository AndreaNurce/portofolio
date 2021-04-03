<template>
<div class="section"  >
          <h1 data-aos="flip-up" class="tittle">
          Contact Me
      </h1>
  <div class="contact-section">
        <div class="section-wrapper">
            <div class="container-left">
                <div data-aos="zoom-in"  class="container">
                <i class="fa-border-icon  fas fa-envelope-open-text"></i>
                <div  class="content">
                    <h4>Email</h4>
                    <br> 
                    <p>nurceandrea2@gmail.com</p>
                </div>
                </div>
            <div data-aos="zoom-in"  class="container">
                <i  class="fa-border-icon  fas fa-mobile-alt"></i>
                <div  class="content">
                    <h4>Phone</h4>
                    <br>
                    <p>111-2222-333</p>
                </div>
                
            </div>
                <div data-aos="zoom-in"  class="container">
                    <i class="fa-border-icon  fab fa-github"></i>
                <div  class="content">
                    <h4>Github</h4>
                    <br>
                    <p>@AndreaNurce</p>
                </div>
                
            </div>
            </div>
             <form class="contact-form" @submit.prevent="sendEmail">
            <div class="container-right">
                <div class="head-container">
               <input v-model="name"  required  data-aos="fade-down" data-aos-duration="900"  type="text" name="from_name" placeholder="Enter your name" > <input type="email" required v-model="email" name="from_email" data-aos="fade-down" data-aos-duration="1000" placeholder="Enter your email" value="">
               </div>
               <div class="bottom-container">
               <input   v-model="tittle" data-aos="fade-down" data-aos-duration="1100" type="text" class="discussion-tittle" name="" placeholder="Discussion tittle" ><br>
               <textarea data-aos="fade-down" v-model="message" data-aos-duration="1200"  name="message" id="" placeholder="Message" cols="30" rows="10"></textarea>
           <button class="button"  >Send a Message Now</button>
                </div>
        </div>
             </form>
    </div>
  </div>
</div>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            name : '',
            email :'',
            tittle : '',
            message : ''
        }
    },
        mounted() {
        this.handleResize();
    },methods: {
        handleResize(){
        this.$store.state.contact = this.$el.offsetTop - 200;
    },sendEmail: (e) => {
      emailjs.sendForm('service_dsjs0so', 'template_wzonkic', e.target, 'user_N2EUF50zkkIJtJv3jN4Gi')
        .then(function ()  {
            
        }, function () {

        });
    }
  }
    ,created () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
    destroyed () {
    window.addEventListener('resize', this.handleResize);
  }
}
</script>
<style scoped>
.conent {
    width: 100%;
}
section{
    margin-top:100px;
    overflow-x: hidden;
    width: 100%;
}

.button{
display: flex;
padding: 12px 24px;
background-color: #e45447;
width: 183px;
border-radius: 50px;
color: white;
font-weight: 400;
cursor: pointer;
transition: all 0.3s ease 0s;
border: none;
}
.button:hover{
background-color: #90acd1;
transition: all 0.3s ease 0s;
}
.head-container{
width: 100%;
}
.bottom-container{
width: 100%;
}
.head-container > *{
width : calc(50% - 25px);
font-size: 16px;
padding: 16px 0px 16px 14px;
margin: 16px 0px 16px 0px;
border-radius: 50px;
border: 2px solid gray;
outline: none;
transition: all 0.3s ease 0s;
}
textarea{
width :calc(100% - 25px);
font-size: 16px;
padding: 16px 0px 16px 14px;
margin: 16px 0px 32px 0px;
border-radius: 40px;
border: 2px solid gray;
outline: none;
transition: all 0.3s ease 0s;
font-family: "Roboto" , sans-serif;
}
input:focus{
border: 2px solid #e45447;
transition: all 0.3s ease 0s;
}
textarea:focus{
border: 2px solid #e45447;
transition: all 0.3s ease 0s;
}
.discussion-tittle {
width :calc(100% - 25px);
font-size: 16px;
padding: 16px 0px 16px 14px;
margin: 16px 0px 16px 0px;
border-radius: 50px;
border: 2px solid gray;
outline: none;
transition: all 0.3s ease 0s;
}
.tittle{
font-weight: 700;
position: relative;
font-size: 45px;
line-height: 44px;
text-align: center;
padding: 79px;

}
.tittle::before{
width: 100px;
height: 2px;    
content: "";
left: 50%;
transform: translateX(-50%);
background: #e45447;
position: absolute;
margin-top: 100px;
}
.tittle::after{
margin-top: 96px;
width: 10px;
height: 10px;
border-radius: 8px;
content: "";
position: absolute; 
background: #e45447;
right: calc(50% - 50px);
transform: translateX(50%);
}
form , .container-left{
width : 50%;
position: relative;
}
.section-wrapper{
display: flex;
justify-content: center;
width: 75%;
}
.fa-border-icon {
border-width: 2px;
border-style: solid;
border-color: #e45447;
border-image: initial;
border-radius: 50% 50% 50% 50%; 
padding: 6% 9% 6% 9%; 
}
.container {
display: flex;
align-items: center ;
padding: 10px 0;
}
.container > div {
padding: 0 25px;
}
.container > h4 {
font-family: "Poppins", sans-serif;
color: #222222;
font-weight: 400;
line-height: 1.5;
}
.container > .content > p {
font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
line-height: 1.625em;
}
.fa-envelope-open-text ,.fa-mobile-alt ,.fa-github{
color: black;
transition: all 0.3s ease 0s;
border-radius: 20px;
}
.fas , .fab{
font-size: 20px;
padding: 14px;
width: 28px;
height: 28px;
text-align: center;
text-decoration: none;
border-radius : 50%;
transition: all 0.3s ease 0s;
}
.contact-section{
display: flex;
justify-content: center;
padding : 60px 0;
}
@media screen and (max-width : 895px) {
    .section-wrapper{
    flex-direction: column;
    align-items: center;
    width: 100%;
}
textarea,.discussion-tittle,.head-container > *{
width :100%;
}
.tittle{
font-size: 35px;
}
.head-container > *{
width : 100%;}
}

</style>