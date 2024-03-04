const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const satelliteCon = require("./satelliteCon");
//auth.isAuth, authSuper.isAuthSuper, 
router.get("/", satelliteCon.merriTeGjitha);

router.get("/:id", satelliteCon.merreNje);

router.post("/", satelliteCon.krijoNje);

router.delete("/:id", satelliteCon.fshijeNje);

router.post("/:id", satelliteCon.updateNje);

module.exports=router;