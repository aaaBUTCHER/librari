const path=require("path");
const port= 3000;

//Routerat
const homepage=require("./routes/homepage");
const bookCollection=require("./routes/bookCollection");
const bookProfile=require("./routes/bookProfile");
const dashboard=require('./routes/dashboard');
const crudiPerLibra=require("./routes/crudiPerLibra");
const libratEBlere=require('./routes/libratEBlere');
const about=require("./routes/about");
const userProfile=require("./routes/userProfile");
const logIn = require("./routes/login");
const register = require('./routes/register');
const blerjet = require("./routes/blerjet");
const session = require('express-session');
const bodyParser = require('body-parser');
//mbrojtjeShtator
const ndertesa = require('./routes/ndertesaRout');
const ashencori = require('./routes/ashencoriRout');
//mbrojtjeQershor
const player = require('./mbrojtjetest/playerRout');
const team = require('./mbrojtjetest/teamRout');

//Expressi the connfigat e tij
const express=require("express");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine","pug");
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('libraria.db');

//pathat kryesor
app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
    })
  );
  
app.use((req, res, next)=>{
  if(!req.session.user){
    req.session.user={
      privilegji: "0"
    }
  }
  next();
})
app.use('/register', register);
app.use("/log-in", logIn);
app.use("/blerjet", blerjet);
app.use("/", homepage);
app.use("/book-collection", bookCollection);
app.use('/about', about);
app.use("/book-profile", bookProfile);
app.use('/dashboard', dashboard);
app.use("/crudiPerLibra", crudiPerLibra);
app.use('/libratEBlere', libratEBlere);
app.use("/user-profile", userProfile);
      //mbrojtjeShtator
        app.use("/ndertesa", ndertesa);
        app.use("/ashencori", ashencori);
      //mbrojtjeQershor
        app.use("/team", team);
        app.use("/player", player);
        

//midleware per err
app.use((req, res, next)=>{
    res.status(404).render("err404", {isAuthenticated: req.isLoggedIn});
})

//eventListner
app.listen(port,()=>console.log("Po nijn ne porten "+ port));