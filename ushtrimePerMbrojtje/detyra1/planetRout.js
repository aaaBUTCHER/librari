const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const planetetCon = require("./planetCon");

router.get("/",auth.isAuth, authSuper.isAuthSuper , planetetCon.merriTeGjitha);

router.post("/" ,auth.isAuth, authSuper.isAuthSuper , planetetCon.shtoNje);

module.exports=router;