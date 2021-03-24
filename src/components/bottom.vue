<template>
    <div class="footer">
        <img height="64px" src="../assets/logo.png" alt="">
        <h3>Follow Me</h3>
        <div class="social-media" >
            <a href="https://www.instagram.com/anurce81/"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/AndreaNurce"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/andrea-nurce-05b08218a/"><i class="fab fa-linkedin"></i></a>
        </div>
        <p>With &hearts; by <span> Andrea Nurce</span></p>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
a{
text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: auto;
}
h3{
    margin: 15px 0 0 0;
    font-size: 21px;
    color: #777777;
    font-weight: 700;
    margin-top: 48px;
font-family: "Roboto", sans-serif;

}
span{
    text-decoration: underline;
    color:#e45447;
}
p{
margin: 45px 0 0 0;
font-family: "Roboto", sans-serif;
color: #777777;
font-size: 15px;
font-weight: 400;
line-height: 1.625em;
letter-spacing: .2rem;
}
img{
    margin: 30px;
}
.fa-linkedin ,.fa-github,.fa-instagram{
cursor: pointer;
margin: 15px;
transition: all 0.3s ease 0s;
}
.fa-linkedin:hover ,.fa-github:hover,.fa-instagram:hover{
color : #e45447;
opacity: 1;
transition: all 0.3s ease 0s;
}
.fab{
font-size: 40px;
padding: 14px;
width: 28px;
height: 28px;
text-align: center;
text-decoration: none;
transition: all 0.3s ease 0s;
opacity: .5;
}
.footer {
    background-color: #F9F9FF;
    padding: 70px 0;
    display: flex;
    align-items: center;
    flex-direction: column;

}

</style>