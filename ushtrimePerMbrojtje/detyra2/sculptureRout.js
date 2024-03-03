const express=require("express");
const auth = require('../../middleware/auth');
const authSuper = require('../../middleware/authSuper');
const router=express.Router();

const sculptureCon = require("./sculptureCon");

router.get("/",auth.isAuth, authSuper.isAuthSuper , sculptureCon.merriTeGjitha);

router.get("/:id",auth.isAuth, authSuper.isAuthSuper , sculptureCon.merreNje);

router.post("/" ,auth.isAuth, authSuper.isAuthSuper , sculptureCon.shtoNje);

router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , sculptureCon.fshijeNje);

router.post("/:id",auth.isAuth, authSuper.isAuthSuper , sculptureCon.perditsoNje);

module.exports=router;