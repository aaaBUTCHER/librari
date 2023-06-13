const express=require("express");
const router=express.Router();
const auth = require('../middleware/auth');
const BookCollection = require("../models/bookCollection");


router.delete("/:id", async (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    try{
        const result = await BookCollection.deletABookCollection(parseInt(id));
        console.log(result);
    }
    catch(err){
        console.log(err)
    }
    res.redirect("/dashboard");
});
module.exports=router;