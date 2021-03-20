<template>
<div class="container-services" >
    <div class="sides-container">
        <div class="services-left">
            <h5>MY SERVICES</h5>
            <h1>I can make this  awesome things </h1>
            <p>I understand what your business means to you,your requirements considering trends.</p>
        </div>
        <div class="services-right">
            <div class="containerWrapper" >
                <div v-bind:key = index v-for="(item,index) in items" >
                    <div class="container">
                        <img :src="require(`../assets/${item}.png`)" alt="">

                        <h2>{{dumbHeader[index]}}</h2>
                        <p>{{dumbText}}</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
 data(){
  return{
    dumbHeader : ["Data analysis" , "Web Development","Content Mangement" , "Mobility"],
    dumbText : "A complete web app solution for business",
    items: [1,2,3,4]
  }
},    mounted() {
        this.$store.state.services = this.$el.offsetTop;

    },
}
</script>

<style scoped>

.containerWrapper{
  transition: all 0.6s ease-in-out;
  display:grid;
  grid-template-columns: auto auto ;
  grid-template-rows: auto auto;
  column-gap: 40px;
  row-gap: 40px;
    justify-content: center;
  align-content: center;

}
.containerWrapper > :nth-child(2) {
  margin-top : 60px;
}
.containerWrapper > :nth-child(3) {
  margin-top : -60px;
}
.container{
  overflow: hidden;
  padding: 50px 40px;
  width: 240px ;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
  z-index: 2;
  transition: all 0.6s ease-in-out;
  text-align: center;
}
.container > p {
  padding: 10px 0;
  color : gray;
  font-family:  " Roboto", sans-serif;
}
.container > h2 {
  color : black;
}
.container > img{
  height : 70px;
  padding : 15px;
}

.container-services{
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/bg-half.png) no-repeat;
    background-position: bottom right ;
    background-position-y: -20%;
}

.sides-container{
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 100px 0;
}
.services-left{
    width: 50%;
    font-weight: 400;
}
.services-left > h5{
font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
}
.services-left > h1{
    color: #222222;
    line-height: 1.5;
    font-size:50px;
}
.services-left > p{
    font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
line-height: 1.625em;
}


.services-right{
        width: 50%;
        display: flex;
        

}
.services-left > *{
    padding: 10px 0;
 }
@media screen and (max-width : 1380px) {
    .container{
  padding: 30px 30px;
  width: 200px ;
  transition: all 0.6s ease-in-out;

}
}

@media screen and (max-width : 1175px) {
    .container{
  padding: 30px 30px;
  width: 150px ;
  transition: all 0.6s ease-in-out;

}

.container > p {
  padding: 10px 0;
  color : gray;
  font-family:  " Roboto", sans-serif;
  font-size: 14px;
}
.container > h2 {
  color : black;
  font-size: 18px;

}
.container > img{
  height : 45px;
  padding : 15px;
}
.services-left > h1{
    color: #222222;
    line-height: 1.5;
    font-size:35px;
}
}

@media screen and (max-width : 954px) {

  .sides-container{
    display: flex;
    flex-direction: column;
}
.services-left , .services-right {
  width: 100%;
}

.container{
  margin-top: 70px;
  overflow: hidden;
  padding: 50px 40px;
  width: 240px ;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
  z-index: 2;
  transition: all 0.6s ease-in-out;
  text-align: center;
}
.container > p {
  padding: 10px 0;
  color : gray;
  font-family:  " Roboto", sans-serif;
}
.container > h2 {
  color : black;
}
.container > img{
  height : 70px;
  padding : 15px;
}
}


@media screen and (max-width : 812px) {
    .container{
  padding: 30px 30px;
  width: 200px ;
  transition: all 0.6s ease-in-out;

}
}
@media screen and (max-width : 679px) {
.containerWrapper{
  display:block;
  margin-left: auto;
  transform: translateX(-25%);

}
.container{
  width: 240px ;

}

.container > p {
  padding: 10px 0;
  color : gray;
  font-family:  " Roboto", sans-serif;
}
.container > h2 {
  color : black;
}
.container > img{
  height : 70px;
  padding : 15px;
}
.containerWrapper > :nth-child(3) {
  margin-top : 0;
}
}
@media screen and (max-width : 454px) {

  .containerWrapper{
  display:block;
  transform: translateX(0%);

}

.container{
  width: 200px ;
}


}
</style>