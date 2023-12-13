const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const personiCon = require("../controllers/personiCon");

router.get("/",auth.isAuth, authSuper.isAuthSuper , personiCon.merriTeGjithePersonat);

router.get("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.merreNjePerson);

router.post("/",auth.isAuth, authSuper.isAuthSuper , personiCon.krijoNjePerson);

router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.fshijeNjePerson);

router.post("/:id",auth.isAuth, authSuper.isAuthSuper , personiCon.updatePersoni);

module.exports=router;