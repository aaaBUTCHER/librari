const conn = require("../util/db");

class Planetet{
    constructor(n, t){
        this.name = n;
        this.type = t;
    }

    static async thirriKejtPlanetetPrejDb(){ 
        try{
            const [row, field] = await  conn.query(`SELECT * FROM libraria.planetet61491;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    async shtoNjePlanetNeDb(){
        const query = 'INSERT INTO libraria.planetet61491 SET ?';
        const [results] = await conn.query(query, this);
        return results;
}


}

module.exports = Planetet;

//e kopjova nga Librat.js edhe e modifikova