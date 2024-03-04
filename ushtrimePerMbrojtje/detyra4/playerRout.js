const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const playerCon = require("./playerCon");

//,auth.isAuth, authSuper.isAuthSuper
router.get("/" , playerCon.merriTeGjitha);


router.post("/", playerCon.shtoNje);



router.delete("/:id", playerCon.fshijeNje);


module.exports=router;