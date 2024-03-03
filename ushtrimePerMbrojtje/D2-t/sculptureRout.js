const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();
const sculptureCon = require("./sculptureCon");

//auth.isAuth, authSuper.isAuthSuper ,
router.get("/",sculptureCon.merriTeGjith);

router.post("/", sculptureCon.shtoNje);

router.get("/:id", sculptureCon.merreNje);

router.post("/:id", sculptureCon.perditsoNje);

router.delete("/:id", sculptureCon.fshijeNje);


module.exports=router;