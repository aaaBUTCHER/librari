const path=require("path");

//Routerat
const homepage=require("./routes/homepage");
const bookCollection=require("./routes/bookCollection");
const about=require("./routes/about")
const dashboard=require('./routes/dashboard')
const crudiPerLibra=require("./routes/crudiPerLibra")

//Expressi the connfigat e tij
const express=require("express");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine","pug");

//pathat kryesor
app.use("/", homepage);
app.use("/book-collection", bookCollection);
app.use('/about', about);
app.use('/dashboard', dashboard);
app.use("/crudiPerLibra", crudiPerLibra);

//midleware per err
app.use((req, res,next)=>{
    res.status(404).render("err404");
})

//eventListner
app.listen(3000,()=>console.log("Po nijn ne porten 3000"));