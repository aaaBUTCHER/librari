const conn = require("../../util/db");
var emriTabelesNeDb = "sculptor212261491";

class Sculptor{
    constructor(n, t){
        this.name = n;
        this.birthYear = t;
    }

    static async thirriKejtPrejDb(){ 
        try{                                                
                                                                        //ndrroje ne fb leje Planet
            const [row, field] = await  conn.query(`SELECT * FROM libraria.`+emriTabelesNeDb+`;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjeNeDb(){
        const query = 'INSERT INTO libraria.'+emriTabelesNeDb+' SET ?';
        const [results] = await conn.query(query, this);
        return results;
    }
}

module.exports = Sculptor;