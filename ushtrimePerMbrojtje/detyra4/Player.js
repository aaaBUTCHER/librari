const conn = require("../../util/db");
var emriTabelesNeDb = "player";

class Player{
    constructor(n, m, b,p){
        this.name = n;
        this.number = m;
        this.birthYear = b;
        this.teamId = p
    }

    static async thirriKejtPrejDb(){ 
        try{
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



    static async fshijeNjePrejDb(id){             
        const query = 'DELETE FROM libraria.'+emriTabelesNeDb+' WHERE playerId = ?';
        const [results] = await conn.query(query, [id]);
        console.log("ufshi")
        return results.affectedRows;
    }

}

module.exports = Player;