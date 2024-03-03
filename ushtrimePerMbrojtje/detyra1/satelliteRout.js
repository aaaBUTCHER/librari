const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const satelliteCon = require("./satelliteCon");

router.get("/",auth.isAuth, authSuper.isAuthSuper , satelliteCon.merriTeGjitha);

router.get("/:id",auth.isAuth, authSuper.isAuthSuper , satelliteCon.merreNje);

router.post("/" ,auth.isAuth, authSuper.isAuthSuper , satelliteCon.shtoNje);

router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , satelliteCon.fshijeNje);

router.post("/:id",auth.isAuth, authSuper.isAuthSuper , satelliteCon.perditsoNje);

module.exports=router;