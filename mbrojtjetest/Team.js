const conn = require("../util/db");

class Team{
    constructor(e){
        this.name = e;
    }

    async shtoNjeNeDb(){
            const query = 'INSERT INTO libraria.team SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    
    static async thirriKejtPrejDb(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.team;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async updateNjePrejDb(id) {
        try {
            const query = 'UPDATE libraria.team SET name = ? teamId = ?';
            const [results] = await conn.query(query, [this.name, id]);

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