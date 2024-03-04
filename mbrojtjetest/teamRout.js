const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const teamCon = require("./teamCon");

router.get("/", teamCon.merriTeGjith);

router.get("/:id", teamCon.merreNje);

router.post("/", teamCon.krijoNje);

router.post("/:id", teamCon.updateNje);

module.exports=router;