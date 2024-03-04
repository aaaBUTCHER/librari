const conn = require("../util/db");

class Player{
    constructor(a, b, c, d){
        this.name = a;
        this.number = b;
        this.birthYear= c;
        this.teamId = d;
    }

    static async thirriKejtPrejDb(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.player`);
            console.log("1");
            console.log(row)
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjePrejDb(){
            const query = 'INSERT INTO libraria.player SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    static async hekeNjePrejDb(id){
        const query = 'Delete from libraria.player WHERE playerId = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

    static async thirreNjePrejDb(id){
        const query = 'SELECT * FROM libraria.player WHERE playerId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }
    
    async updateNjePrejDb(id) {
        try {
            const query = 'UPDATE libraria.player SET name = ?,number=?, birthYear=? WHERE playerId = ?';
            const [results] = await conn.query(query, [this.name,this.number,this.birthYear, id]);

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

module.exports = Player;