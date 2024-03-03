const conn = require("../util/db");

class Sculpture{
    constructor(n, m,p){
        this.title = n;
        this.materiali = m;
        this.sculptorId = p;
    }

    static async thirriKejtPrejDb(){ 
        try{
            //const [row, field] = await  conn.query(`SELECT * FROM libraria.sculpture212261491 WHERE isDeletet = false;`);
            const [row, field] = await  conn.query(`SELECT * FROM libraria.sculpture212261491;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjeNeDb(){
        console.log("12")
        const query = 'INSERT INTO libraria.sculpture212261491 SET ?';
        console.log("13")
        const [results] = await conn.query(query, this);
        console.log("14")
        return results;
    }

    static async merreNjePrejDb(id){
        const query = 'SELECT * FROM libraria.sculpture212261491 WHERE skulptureID = ?';
        const results = await conn.query(query, [id]);
        return results;
    }

    async perditsoNeDb(id) {
        try {
            console.log("hi");
            const query = 'UPDATE libraria.sculpture212261491 SET title = ?, materiali = ?, sculptorId = ? WHERE skulptureID = ?';
            console.log("hi");
            const [results] = await conn.query(query, [this.title, this.materiali, this.sculptorId, id]);
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

    static async fshijeNjePrejDb(id){
        const query = 'UPDATE libraria.sculpture212261491 SET isDeletet = true WHERE skulptureID = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }


}

module.exports = Sculpture;

//e kopjova nga Librat.js edhe e modifikova