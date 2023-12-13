const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();
const bankaCon = require("../controllers/bankaCon");
//auth.isAuth, authSuper.isAuthSuper ,
router.get("/",bankaCon.merriTeGjithaBankat);

router.post("/", bankaCon.shtoNjeBank);

router.get("/:id", bankaCon.merreNjeBanke);

router.post("/:id", bankaCon.perditsoBanken);

router.delete("/:id", bankaCon.fshijeBanken);


module.exports=router;