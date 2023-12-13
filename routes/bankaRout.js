const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();
const bankaCon = require("../controllers/bankaCon");
//auth.isAuth, authSuper.isAuthSuper ,
router.get("/",auth.isAuth, authSuper.isAuthSuper ,bankaCon.merriTeGjithaBankat);

router.post("/", auth.isAuth, authSuper.isAuthSuper , bankaCon.shtoNjeBank);

router.get("/:id",auth.isAuth, authSuper.isAuthSuper , bankaCon.merreNjeBanke);

router.post("/:id",auth.isAuth, authSuper.isAuthSuper , bankaCon.perditsoBanken);

router.delete("/:id",auth.isAuth, authSuper.isAuthSuper , bankaCon.fshijeBanken);


module.exports=router;