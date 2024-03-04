const conn = require("../../util/db");
var emriTabelesNeDb = "team";

class Team{
    constructor(n){
        this.name = n;
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

    static async merreNjePrejDb(id){
        const query = 'SELECT * FROM libraria.'+emriTabelesNeDb+' WHERE teamId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }

    async perditsoNeDb(id) {
        try {
            console.log("hi");
            const query = 'UPDATE libraria.'+emriTabelesNeDb+' SET name = ? WHERE teamId = ?';
            console.log("hi");
            const [results] = await conn.query(query, [this.name, id]);
            console.log("hi \n ", results);

            if (results.affectedRows > 0) {
                return true; // Update was successful
            } else {
                return false; // No records were updated
            }
        } catch (error) {
            throw error; // Propagate the error to the caller
        }
    }
}

module.exports = Team;