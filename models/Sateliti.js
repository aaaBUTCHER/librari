const conn = require("../util/db");

class Sateliti{
    constructor(n, p){
        this.name = n;
        this.planetId = p
    }

    static async thirriKejtSatelitetPrejDb(){ 
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.satelit61491 WHERE isDeletet = false;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjeSatelitetNeDb(){
        const query = 'INSERT INTO libraria.satelit61491 SET ?';
        const [results] = await conn.query(query, this);
        return results;
    }

    static async merreNjeSatelitPrejDb(id){
        const query = 'SELECT * FROM libraria.satelit61491 WHERE satelitId = ?';
        const results = await conn.query(query, [id]);
        return results;
    }

    async perditsoSatelitinNeDb(id) {
        try {
            console.log("hi");
            const query = 'UPDATE libraria.satelit61491 SET name = ?, planetId = ? WHERE satelitId = ?';
            console.log("hi");
            const [results] = await conn.query(query, [this.name, this.planetId, id]);
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

    static async fshijeNjeSatelitPrejDb(id){
        const query = 'UPDATE libraria.satelit61491 SET isDeletet = true WHERE satelitId = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }


}

module.exports = Sateliti;

//e kopjova nga Librat.js edhe e modifikova