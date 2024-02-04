const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const planetetCon = require("../controllers/planetetCon");

router.get("/", planetetCon.merriTeGjithaPlanetet);

//router.get("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.merreNjePerson);
//
router.post("/" , planetetCon.shtoNjePlanet);
//
//router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.fshijeNjePerson);
//
//router.post("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.updatePersoni);

module.exports=router;