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



// a) Insertimi i Skulptorit
app.post('/skulptor', (req, res) => {
  const { Name, BirthYear } = req.body;
  const query = 'INSERT INTO Skulptor (Name, BirthYear, IsDeleted) VALUES (?, ?, ?)';
  db.run(query, [Name, BirthYear, false], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send('Skulptori u shtua me sukses!');
    }
  });
});

// b) Insertimi i Skulptures
app.post('/sculpture', (req, res) => {
  const { Title, Material, SkulptorID } = req.body;
  const query = 'INSERT INTO Sculpture (Title, Material, IsDeleted, SkulptorID) VALUES (?, ?, ?, ?)';
  db.run(query, [Title, Material, false, SkulptorID], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send('Skulptura u shtua me sukses!');
    }
  });
});

// c) Fshirja e Skulptures
app.delete('/sculpture/:id', (req, res) => {
  const sculptureID = req.params.id;
  const query = 'UPDATE Sculpture SET IsDeleted = true WHERE SculptureID = ?';
  db.run(query, [sculptureID], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send('Skulptura u fshi me sukses!');
    }
  });
});

// d) Shfaqja e Skulpturave të ruajtura
app.get('/sculptures', (req, res) => {
  const query = 'SELECT * FROM Sculpture WHERE IsDeleted = false';
  db.all(query, (err, sculptures) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(sculptures);
    }
  });
});

// e) Ndryshimi i të dhënave të Skulptures
app.put('/sculpture/:id', (req, res) => {
  const sculptureID = req.params.id;
  const { Title, Material } = req.body;
  const query = 'UPDATE Sculpture SET Title = ?, Material = ? WHERE SculptureID = ? AND IsDeleted = false';
  db.run(query, [Title, Material, sculptureID], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send('Të dhënat e Skulpturës u ndryshuan me sukses!');
    }
  });
});