<template>
  <div class="container-home" >
      <div class="sides-container">
        <div class="home-left">
            <h3 data-aos="fade-down" data-aos-duration="900">H E Y ! I  A M</h3>
            <h1 data-aos="fade-down" data-aos-duration="800">Andrea Nurçe !</h1>
            <h2 data-aos="fade-down" data-aos-duration="700">I'm a Web Developer .</h2>
            <p data-aos="fade-down" data-aos-duration="600" >Lorem ipsum dolor sit amet consectetur mollitia in ad  Minus <br>mollitia in perspiciatis ad,  fuga quidem sunt impedit </p>
            <div  class="download"><p data-aos="fade-down" data-aos-duration="600" >Download</p></div>
        </div>
        <div data-aos="zoom-out" class="home-right">
            <img src="../assets/hero_right.png" alt="">
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
    }
    },created () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
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

}.home-left>h2{
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
    width: 500px;
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
    font-size: 45px  ;
    transition: all 0.3s ease 0s;

}.home-left>h2{
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