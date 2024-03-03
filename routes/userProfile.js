const express=require("express");
const router=express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

router.get("/", auth.isAuth ,(req, res)=>{

    res.render("profili/profili",{user: req.session.user,  isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});

router.patch("/" ,  auth.isAuth, userController.updateUser);



module.exports=router;