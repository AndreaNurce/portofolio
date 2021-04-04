<template>
  <div class="container-home" >
      <div class="sides-container">
        <div class="home-left">

            <h3 data-aos="fade-down" data-aos-duration="900">H E Y ! I  A M</h3>
            <h1 data-aos="fade-down" data-aos-duration="800">Andrea Nurçe !</h1>

            <vue-typed-js :strings="[' a Web Developer .', 'a Web Designer .' , 'a Freelancer .', 'a Developer .' ]" :backSpeed="50"  :loop="true">
            <h2 class="h2" data-aos="fade-down" data-aos-duration="700" >I'm <span class="typing"></span></h2>
            </vue-typed-js>
            <p data-aos="fade-down" data-aos-duration="600" >Measuring programming progress by lines of code is like <br> measuring aircraft building progress by weight.</p>
            <div  class="download"><p  @click="learnMore()" data-aos="fade-down" data-aos-duration="600" >Learn more</p></div>
        </div>
        <div  data-aos="zoom-out" class="home-right">
            <img  v-tilt="{speed: 500, perspective: 1200 ,scale:1.05,glare : true ,'max-glare':0.5}"  data-aos="zoom-out" src="../assets/hero_right.png" alt="">
        </div>
        </div>
        <br>
  </div>
</template>

<script>

export default {
    mounted() {
                this.handleResize();
    },methods: {
        handleResize(){
        this.$store.state.home = this.$el.offsetTop;
    },learnMore(){
        window.scrollTo({
            top : this.$store.state.services,
            behavior : "smooth"
        })
    }
    },created () {
    window.addEventListener('resize', this.handleResize);
  },
    destroyed () {
    window.addEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
.home-right > img{
    height: 500px;
    transition: all 0.3s ease 0s;
    -webkit-filter: drop-shadow(20px 30px 18px rgba(85, 128, 255, 0.2));
    filter: drop-shadow(20px 30px 10px rgba(85, 128, 255, 0.2));

}

.download > p{
    margin-top:30px;
    background: #90acd1;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 0;
    padding: 30px 44px;
    border-radius: 50px;
    transition:  0.3s linear;
    box-shadow: 0px 10px 15px 0px rgba(85, 128, 255, 0.2);


}.download > p:hover{
    background-color: #E45447;
}
.container-home{
    padding-top : 30px;
    height: 100vh;
    background-color: #F9F9FF;z-index: 0;
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
.home-left{
    width: 600px;
    font-weight: 400;
}
.home-right{
    width: 400px;
    text-align: center;
    transition: all 0.3s ease 0s;

}
.home-left>*{
    padding: 10px 0;
    transition: all 0.3s ease 0s;

}
.home-left>h3{
    color:#ABD4FC;
    font-size: 16px;
    transition: all 0.3s ease 0s;

}
.home-left>h1{
    font-size: 60px  ;
    transition: all 0.3s ease 0s;

}.h2{
    font-size: 30px  ;
    color: #e45447;
    transition: all 0.3s ease 0s;


}.home-left>p{
    font-size: 13px  ;
    color: #777777;
    transition: all 0.3s ease 0s;


}
@media screen and (max-width : 1233px) {
    
    .home-right > img{
    height: 400px;
    transition: all 0.3s ease 0s;

}    .home-right {
    width: 300px;
    transition: all 0.3s ease 0s;

}
}
@media screen and (max-width : 1098px) {
    
    .home-right > img{
    height: 350px;
    transition: all 0.3s ease 0s;

}    .home-right {
    width: 200px;
    transition: all 0.3s ease 0s;

}
}
@media screen and (max-width : 966px) {
    
  .home-right {
    display: none;
    transition: all 0.3s ease 0s;

}
.sides-container{
    justify-content:center;
    transition: all 0.3s ease 0s;
}
}
@media screen and (max-width : 698px) {

.home-left>h3{
    transition: all 0.3s ease 0s;
    font-size: 12px;
}
.home-left>h1{
    font-size: 410px  ;
    transition: all 0.3s ease 0s;

}.h2{
    font-size: 23px  ;
    color: #e45447;
    transition: all 0.3s ease 0s;


}.home-left>p{
    font-size: 13px  ;
    color: #777777;
    transition: all 0.3s ease 0s;


}


}
</style>