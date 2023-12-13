const conn = require("../util/db");

class Personi{
    constructor(e, m, b){
        this.emri51835 = e;
        this.mbiemri51835 = m;
        this.bankaid = b
    }

    //
    async shtoNjePerson(){
        const query = 'INSERT INTO libraria.personi51835 SET ?';
        const [results] = await conn.query(query, this);
        return results;
    }

    static async hekeNjePerson(id){
        const query = 'DELETE  FROM libraria.personi51835 WHERE id51835 = ?';
        console.log("2");
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

    static async thirriKejtPersonat(){
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.personi51835;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    static async thirreQetPerson(id){
        const query = 'SELECT * FROM libraria.personi51835 WHERE id51835 = ?';
        const results = await conn.query(query, [id]);
        return results;
    }


    //modifikojm ne fund ubdate
    // me chatGPT
    async updatePersoni(id) {
        try {
            const query = 'UPDATE libraria.personi51835 SET emri51835 = ?, mbiemri51835 = ?, bankaid = ? WHERE id51835 = ?';
            const [results] = await conn.query(query, [this.emri51835, this.mbiemri51835, this.bankaid, id]);
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

module.exports = Personi;

//e kopjova nga Librat.js edhe e modifikova