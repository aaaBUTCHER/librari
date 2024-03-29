const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();

const ndertesaCon = require("../controllers/ndertesaCon");
//auth.isAuth, authSuper.isAuthSuper, 
router.get("/", ndertesaCon.merriTeGjithaNdertesat);

router.get("/:id", ndertesaCon.merreNjeNdertes);

router.post("/", ndertesaCon.krijoNjeNdertes);

router.delete("/:id", ndertesaCon.fshijeNjeNdertes);

router.post("/:id", ndertesaCon.updateNdertesa);

module.exports=router;