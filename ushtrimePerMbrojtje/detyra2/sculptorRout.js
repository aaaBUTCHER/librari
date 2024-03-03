const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const sculptorCon = require("./sculptorCon");

router.get("/",auth.isAuth, authSuper.isAuthSuper , sculptorCon.merriTeGjitha);

router.post("/" ,auth.isAuth, authSuper.isAuthSuper , sculptorCon.shtoNje);

module.exports=router;