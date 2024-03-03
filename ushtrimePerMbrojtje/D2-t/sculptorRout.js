const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();
const sculptorCon = require("./sculptorCon");

//auth.isAuth, authSuper.isAuthSuper ,
router.get("/", sculptorCon.merriTeGjith);

router.post("/", sculptorCon.shtoNje);

module.exports=router;