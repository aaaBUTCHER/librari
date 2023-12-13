const conn = require("../util/db");

class Banka{
    constructor(e){
        this.emri212261491 = e;
    }


    async shtoNjeBankClass(){
            const query = 'INSERT INTO libraria.Banka212261491 SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }

    static async hekeNjeBanke(id){
        const query = 'DELETE  FROM libraria.banka212261491 WHERE id212261491 = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }
    
    static async thirriKejtBankat(){
        try{
            const [row, field] = await conn.query(`SELECT * FROM libraria.banka212261491;`);
            console.log("te dhenat e tabeles banka u morren me sukses-classbanka(thirrikejtBankat");
            console.log(row)
            return row;
        }
        catch(err){
            console.log("ishte nje problem nga marrja e te dhenave ne tabelen banka");
            console.log(err);
        }
    }

    static async thirreQetBanke(id){
        const query = 'SELECT * FROM libraria.banka212261491 WHERE id212261491 = ?';
        const results = await conn.query(query, [id]);
        return results;
    }
    

    //modifikojm ne fund ubdate
    // me chatGPT
    async updateBanka(id) {
        try {
            const query = 'UPDATE libraria.banka212261491 SET emri212261491 = ? WHERE id212261491 = ?';
            const [results] = await conn.query(query, [this.emri212261491, id]);

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

module.exports = Banka;

//e kopjova nga Librat.js edhe e modifikova