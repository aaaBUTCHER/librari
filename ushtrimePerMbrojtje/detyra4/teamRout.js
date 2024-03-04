const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const teamCon = require("./teamCon");
//,auth.isAuth, authSuper.isAuthSuper 
router.get("/", teamCon.merriTeGjitha);

router.post("/", teamCon.shtoNje);

router.get("/:id", teamCon.merreNje);

router.post("/:id", teamCon.perditsoNje);

module.exports=router;