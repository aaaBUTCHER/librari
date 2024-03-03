const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const satelitiCon = require("../controllers/satelitiCon");

//mjav shtu authetikimet ,auth.isAuth, authSuper.isAuthSuper 

router.get("/",auth.isAuth, authSuper.isAuthSuper , satelitiCon.merriTeGjithSatelitet);

router.get("/:id",auth.isAuth, authSuper.isAuthSuper , satelitiCon.merreNjeSatelit);
//
router.post("/" ,auth.isAuth, authSuper.isAuthSuper , satelitiCon.shtoNjeSatelit);
//
router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , satelitiCon.fshijeNjeSatelit);
//
router.post("/:id",auth.isAuth, authSuper.isAuthSuper , satelitiCon.perditsoNjeSatelit);

module.exports=router;