const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const playerCon = require("./playerCon");
//auth.isAuth, authSuper.isAuthSuper, 
router.get("/", playerCon.merriTeGjitha);

router.get("/:id", playerCon.merreNje);

router.post("/", playerCon.krijoNje);

router.delete("/:id", playerCon.fshijeNje);

router.post("/:id", playerCon.updateNje);

module.exports=router;