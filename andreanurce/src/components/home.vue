<template>
  <div v-on:scroll.passive="evetScroller()" class="container-home" >
      <div class="sides-container">
        <div class="home-left">
            <h3>H E Y ! I  A M</h3>
            <h1>Andrea Nurçe !</h1>
            <h2>I'm a Web Developer .</h2>
            <p>Lorem ipsum dolor sit amet consectetur mollitia in ad  Minus <br>mollitia in perspiciatis ad,  fuga quidem sunt impedit </p>
            <div class="download"><p>Download</p></div>
        </div>
        <div class="home-right">
            <img src="../assets/hero_right.png" alt="">
        </div>
        </div>
        <br>
  </div>
</template>

<script>

export default {
    mounted() {
        this.$store.state.home = this.$el.getBoundingClientRect().top;
    },
}
</script>

<style scoped>
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
    width: 500px;
}
.home-left>*{
    padding: 10px 0;
}
.home-left>h3{
    color:#ABD4FC;
    font-size: 16px;
}
.home-left>h1{
    font-size: 60px  ;
}.home-left>h2{
    font-size: 30px  ;
    color: #e45447;

}.home-left>p{
    font-size: 13px  ;
    color: #777777;

}
</style>