const conn = require("../../util/db");
var emriTabelesNeDb = "sculpture212261491";

class Sculpture{
    constructor(n, m, p){
        this.title = n;
        this.material = m;
        this.sculptorId = p
    }

    static async thirriKejtPrejDb(){ 
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.`+emriTabelesNeDb+` WHERE isDeleted = false;`);
            //const [row, field] = await  conn.query(`SELECT * FROM libraria.`+emriTabelesNeDb+`;`);
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
        const query = 'SELECT * FROM libraria.'+emriTabelesNeDb+' WHERE sculptureId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }

    async perditsoNeDb(id) {
        try {
            console.log("hi");
            const query = 'UPDATE libraria.'+emriTabelesNeDb+' SET title = ?, material = ?, sculptorId = ? WHERE sculptureId = ?';
            console.log("hi");
            const [results] = await conn.query(query, [this.title, this.material, this.sculptorId, id]);
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
        const query = 'UPDATE libraria.'+emriTabelesNeDb+' SET isDeleted = true WHERE sculptureId = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

}

module.exports = Sculpture;