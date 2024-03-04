const Users = require('../models/users');

exports.updateUser = async (req, res)=>{
    console.log(req.session)
    console.log(req.body)

    const result = await Users.updateUserField(req.body.field, req.body.value, req.body.id);
    
    if(result.changedRows>=1){
        console.log(req.body.field);
        switch(req.body.field){
            case "emrin":
                console.log("te ndrru emrin");
                req.session.user.emrin=req.body.value;
                break;
            case "mbiemri":
                console.log("te ndrru mbiemri");
                req.session.user.mbiemri=req.body.value;
                break;
            case "email":
                console.log("te ndrru emaili");
                req.session.user.email=req.body.value;
                break;
            case "bio":
                console.log("te ndrru bio");
                req.session.user.bio=req.body.value;
                break;
            default:
                break;
        }
        console.log(req.session);
        res.send(req.body).status(200);
    }
}