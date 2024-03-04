const conn = require("../util/db");

class Satellite{
    constructor(e, d){
        this.name = e;
        this.planetId = d;
    }

    static async thirriKejtPrejDb(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.satellite202151835 where isDeleted=false;`);
            console.log("1");
            console.log(row)
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjePrejDb(){
            const query = 'INSERT INTO libraria.satellite202151835 SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    static async hekeNjePrejDb(id){
        const query = 'UPDATE libraria.satellite202151835 SET isDeleted = true WHERE satelliteId = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

    static async thirreNjePrejDb(id){
        const query = 'SELECT * FROM libraria.satellite202151835 WHERE satelliteId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }
    
    async updateNjePrejDb(id) {
        try {
            const query = 'UPDATE libraria.satellite202151835 SET name = ?, planetId = ? WHERE satelliteId = ?';
            const [results] = await conn.query(query, [this.name, this.planetId, id]);

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

module.exports = Satellite;