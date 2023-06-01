const test = require("./test");

test.getConnection( (err, connection)=>{
    if(err){
        console.error(err);
        return;
    }
    connection.query("SELECT titulli, autori FROM libraria.libra;",(err, res, field)=>{
        console.table(res);
    });
});
