const conn = require("../util/db");

class Ashencori{
    constructor(e, d){
        this.emertimi212261491 = e;
        this.nderteSaId = d;
    }

    async shtoNjeAshencor(){
            const query = 'INSERT INTO libraria.ashencori212261491 SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    static async hekeNjeAshencor(id){
        const query = 'DELETE  FROM libraria.ashencori212261491 WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }
    
    static async thirriKejtSHOQETjoAshencortThirri(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.ashencori212261491;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    static async thirreQetAshencor(id){
        const query = 'SELECT * FROM libraria.ashencori212261491 WHERE id = ?';
        const results = await conn.query(query, [id]);
        return results;
    }
    

    //modifikojm ne fund ubdate
    // me chatGPT
    async updateAshencori(id) {
        try {
            const query = 'UPDATE libraria.ashencori212261491 SET Emertimi212261491 = ?, NderteSaID = ? WHERE id = ?';
            const [results] = await conn.query(query, [this.emertimi212261491, this.nderteSaId, id]);
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

module.exports = Ashencori;

//e kopjova nga Ndertesa.js edhe e modifikova