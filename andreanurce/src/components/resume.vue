<template>
<div class="container-resume" >
    <h1 class="resume">Resume</h1>
    <div class="sides-container">
        <div class="resume-left">
        </div>
        <div class="resume-right">
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container-resume{
    padding: 100px 0;

}

.container-resume > h1{
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
}
.resume-left{
    width: 400px;
    font-weight: 400;
}
.resume-right{
    width: 600px;
}


</style>