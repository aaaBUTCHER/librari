const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const planetetCon = require("./planetCon");

router.get("/", planetetCon.merriTeGjith);

router.post("/", planetetCon.krijoNje);

module.exports=router;