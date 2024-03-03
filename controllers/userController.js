const Users = require('../models/users');

exports.updateUser = async (req, res)=>{
    console.log(req.session)
    console.log(req.body)

    const result = await Users.updateUserField(req.body.field, req.body.value, req.body.id);
    
    if(result.changedRows>=1){
        if(!req.session.user.emrin===req.body.value){
            req.session.user.emrin=req.body.value;
        }
        if(!req.session.user.mbiemri===req.body.value){
            req.session.user.mbiemri=req.body.value;
        }
        if(!req.session.user.email===req.body.value){
            req.session.user.email=req.body.value;
        }
        if(!req.session.user.bio===req.body.value){
            req.session.user.bio=req.body.value;
        }
        
        res.send(req.body).status(200);
    }
    
    
}
