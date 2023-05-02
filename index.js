const path=require("path");

//Routerat

//Expressi the connfigat e tij
const express=require("express");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine","pug");


//midleware per err
app.use((req, res,next)=>{
    res.status(404).render("err404");
})

//eventListner
app.listen(3000,()=>console.log("Po nijn ne porten 3000"));