const conn = require("../util/db");

class Sculptor{
    constructor(n, t){
        this.name = n;
        this.birthYear = t;
    }

    static async thirriKejtPrejDb(){ 
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.sculptor212261491;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjeNeDb(){
        const query = 'INSERT INTO libraria.sculptor212261491 SET ?';
        const [results] = await conn.query(query, this);
        return results;
}


}

module.exports = Sculptor;

//e kopjova nga Librat.js edhe e modifikova