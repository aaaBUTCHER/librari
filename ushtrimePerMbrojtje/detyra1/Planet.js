const conn = require("../../util/db");

class Planet{
    constructor(n, t){
        this.name = n;
        this.type = t;
    }

    static async thirriKejtPrejDb(){ 
        try{                                                
                                                                        //ndrroje ne db leje Planet
            const [row, field] = await  conn.query(`SELECT * FROM libraria.planetet61491;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjeNeDb(){
        const query = 'INSERT INTO libraria.planetet61491 SET ?';
        const [results] = await conn.query(query, this);
        return results;
    }
}

module.exports = Planet;