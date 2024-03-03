const conn = require("../util/db");
const zhanriEnum = require("./zhanri");

class Librat{
    constructor(titulli, isbn, autori, vitiIBotimit, cmimi, zhanri, isVisible, pdfLink, imgId, pershkrimiID){
        this.titulli = titulli;
        this.isbn = isbn;
        this.autori = autori;
        this.viti_botimit = vitiIBotimit;
        this.cmimi = cmimi;
        this.zhanri = zhanri;
        this.is_visible = isVisible;
        this.pdf_link = pdfLink;
        this.image_id = imgId;
        this.pershkrimi_id = pershkrimiID;
    }


    async createBook(){
            const query = 'INSERT INTO libraria.librat SET ?';
            const [results] = await conn.query(query, this);
            return results;
    }
    
    async createPershkrimi(id_pershkrimi ,pershkrimiText){
        const values=[id_pershkrimi,pershkrimiText];
        const query = 'INSERT INTO libraria.pershkrimi (id, texti) VALUES (?, ?)';
        const [results] = await conn.execute(query, values);
        return results;
    }
    
    async updataPershkirmiId(p_id, bookId){
        const values= [p_id, bookId];
        //UPDATE librat SET titulli =in_titulli 
        const query = 'UPDATE libraria.librat SET pershkrimi_id = ? WHERE id= ?';
        const [results] = await conn.execute(query, values);
        return results;
    }

    getBook(){
        console.log(this);
    }


    static async deletaABook(id){
    const query = 'DELETE  FROM librat WHERE id = ?';
    const [results] = await conn.query(query, [id]);
    return results.affectedRows;
    }
    
    static async getAllBooks(){
        try{
            const [row, field] = await  conn.query(`
            SELECT l.id, l.isbn, titulli, autori, i.linku, z.zhanri, l.is_visible, l.cmimi, p.texti, l.viti_botimit
            FROM librat l
            join image i on l.image_id=i.id
            join zhanri z on l.zhanri=z.id
            join pershkrimi p on l.pershkrimi_id = p.id;`);
            return row;
        }
        catch(err){
            console.log(err);
        }
    }

    static async updateBooks(updataParams){
        console.log(updataParams);
        const callProcedure = `CALL updateBooks(?, ?, ?, ?, ?, ?, ?)`;
        const result = await conn.execute(callProcedure, updataParams);
        return result;
    }

    //per Librat E bBlere
    static async getAllSelles(){
        try{
            const [row, field] = await  conn.query(`
            SELECT b.id, b.data_e_blerjes, u.emrin, u.mbiemri, l.cmimi, l.titulli, l.autori, l.zhanri, l.id as libra_id
            FROM koleksioni b
            JOIN userat u ON b.userat_id = u.id
            JOIN librat l ON b.librat_id = l.id;`);
            return row;
        }
        catch(err){
            console.log(err)
        }
    }

    static async deletASale(id){
        const query = 'DELETE FROM koleksioni WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }
}

module.exports = Librat;