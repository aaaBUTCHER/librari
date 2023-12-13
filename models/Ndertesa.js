const conn = require("../util/db");

class Ndertesa{
    constructor(e, d){
        this.emri212261491 = e;
        this.dataPT = d;
    }


    async shtoNjeNdertes(){
            const query = 'INSERT INTO libraria.ndertesa212261491 SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    static async hekeNjeNdertes(id){
        const query = 'DELETE  FROM libraria.ndertesa212261491 WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }
    
    static async thirriKejtSHOQETjoNdertesatThirri(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.ndertesa212261491;`);
            console.log("1");
            console.log(row)
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    static async thirreQetNdertes(id){
        const query = 'SELECT * FROM libraria.ndertesa212261491 WHERE id = ?';
        const results = await conn.query(query, [id]);
        return results;
    }
    

    //modifikojm ne fund ubdate
    // me chatGPT
    async updateNdertesa(id) {
        try {
            const query = 'UPDATE libraria.ndertesa212261491 SET emri212261491 = ?, dataPT = ? WHERE id = ?';
            const [results] = await conn.query(query, [this.emri212261491, this.dataPT, id]);

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

module.exports = Ndertesa;

//e kopjova nga Librat.js edhe e modifikova