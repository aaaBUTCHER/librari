const express= require('express');
const router= express.Router();

router.get("/", (req,res)=>{
    res.render("authentication/log-in");
});

module.exports=router;