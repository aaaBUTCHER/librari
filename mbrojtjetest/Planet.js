const conn = require("../util/db");

class Planet{
    constructor(e, d){
        this.name = e;
        this.type = d;
    }

    async shtoNjeNeDb(){
            const query = 'INSERT INTO libraria.planet202151835 SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    
    static async thirriKejtPrejDb(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.planet202151835;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = Planet;