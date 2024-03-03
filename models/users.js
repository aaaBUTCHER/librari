const conn = require("../util/db");
const bcrypt = require('bcrypt');


class Users{
    constructor(emrin, mbiemri, email, passwordi, privilegji, user_image, bio){
                    this.emrin=emrin;
                    this.mbiemri=mbiemri;
                    this.email=email;
                    this.passwordi=passwordi;
                    this.privilegji=privilegji;
                    this.user_image=user_image;
                    this.bio=bio;
    }

    async createUser(){
        const hash=await bcrypt.hash(this.passwordi, 10)
        this.passwordi=hash;
        const query = 'INSERT INTO libraria.userat SET ?';
        const [results] = await conn.query(query, this);
        return results.insertId;
    }

    static async getAllAdmins(){
        const query = 'SELECT * FROM libraria.userat where privilegji=2;';
        const [results] = await conn.query(query);
        return results;
    }
    async getUser(id){
        const query = 'SELECT * FROM userat WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results;
    }
    static async  getUserByEmail(email){
        const query = 'SELECT * FROM userat WHERE email = ?';
        const [results, field] = await conn.query(query, [email]);
        return results;
    }

    static async deletaUser(id){
        const query = 'DELETE * FROM userat WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

    async printo(){
        const hash=await bcrypt.hash(this.passwordi, saltRounds)
        this.passwordi=hash;
        console.log(this);
    }

    static async getAllUsers(){
        try{
            const [row, field] = await  conn.query(`
            SELECT id, emrin, mbiemri, email, passwordi, privilegji, user_image, bio
            FROM userat`)
            return row;
        }
        catch(err){
            console.error(err);
        }

    }

    static async updateUserField(field, value, id){

        console.log("hi1")
        let fieldAvaliable = [ "emrin", "mbiemri", "email", "passwordi",  "bio" ];

        if(!fieldAvaliable.includes(field)){
            throw new Error(field + "  keq diqka nuk osht fush qe perfshihet- ose mund ta editosh ");
        }

        let user2 = new Users();
        
        let [result] = await user2.getUser(id);

        if(!result.id){
            throw new Error(user.id + "nuk ekziston ");
        }
        console.log("hi5")
        try{
           const query = 'UPDATE libraria.userat SET '+field+' = ? WHERE id = ?';
            const [results] = await conn.query(query, [ value, id]);
            return results;
        }catch(err){
            return err
        }
        
        
    }
}


module.exports = Users;