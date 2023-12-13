const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const ashencoriCon = require("../controllers/ashencoriCon");
//auth.isAuth, authSuper.isAuthSuper, 
router.get("/", ashencoriCon.merriTeGjithAshencoret);

router.get("/:id", ashencoriCon.merreNjeAshencor);

router.post("/", ashencoriCon.krijoNjeAshencor);

router.delete("/:id", ashencoriCon.fshijeNjeAshencor);

router.post("/:id", ashencoriCon.updateAshencori);

module.exports=router;