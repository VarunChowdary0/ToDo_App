const { render } = require('ejs');
const express=require('express')
const app=express();

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.static("public"))

app.get('/todo',(req,res)=>{
    res.render('home')
})
app.get('/',(req,res)=>{
    res.render("SetUp")
})
app.listen(1000,()=>{
    console.log("server running---------")
})