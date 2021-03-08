<template>
<div class="container-services" >
    <div class="sides-container">
        <div class="services-left">
            <h5>MY SERVICES</h5>
            <h1>I can make this  awesome things </h1>
            <p>I understand what your business means to you,your requirements considering trends.Smet nemo excepturi voluptas eligendi .</p>
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
}
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
}
.containerWrapper > :nth-child(2) {
  margin-top : 60px;

}
.containerWrapper > :nth-child(3) {
  margin-top : -60px;

}

.container{
  padding: 50px 40px;
  width: 240px ;
  height: 208px;
  background-color: white;
  border-radius: 10px;
  box-shadow:0  12px 6px rgba(0,0,0,0.2);
  z-index: 2;
  transition: all 0.6s ease-in-out;
  text-align: center;
}
.container > p {
  color : gray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    justify-content: space-between;
    align-items: center;
    padding: 100px 0;
}
.services-left{
    width: 400px;
    font-weight: 400;
}
.services-right{
    width: 600px;
}
.services-left > *{
    padding: 10px 0;
 }


</style>