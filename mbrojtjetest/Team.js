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

    static async thirreNjePrejDb(id){
        const query = 'SELECT * FROM libraria.team WHERE teamId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }

    async updateNjePrejDb(id) {
        try {
            const query = 'UPDATE libraria.team SET name = ? teamId = ?';
            const [results] = await conn.query(query, [this.name, id]);

            if (results.affectedRows > 0) {
                return true; 
            } else {
                return false; 
            }
        } catch (error) {
            throw error; 
        }
    }

}


module.exports = Team;