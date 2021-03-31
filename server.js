const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express();
const cors = require('cors')
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use('/',serveStatic(path.join(__dirname,'/dist')))

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist', 'index.html'));
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


// async..await is not allowed in global scope, must use a wrapper
async function main(sub, textMess ,email , name ) {
    
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'nurceandrea2@gmail.com', 
      pass:'', 
    },
  });

  
  let info = await transporter.sendMail({
    to: "andrea-dibra@hotmail.com",
    subject: sub, 
    html :  `<h1>${name}</h1> <br> <h2>${email}</h2> <p>${textMess}</p>`
  });

  console.log(sub , textMess , email ,name);
 
}



app.post('/contact' ,  async (req ,res)=>{
  main(req.body.tittle ,req.body.message   ,req.body.email , req.body.name ).catch(console.error);
})

const port = process.env.PORT || 8080
console.log(`server listening on port ${port}`);
app.listen(port)