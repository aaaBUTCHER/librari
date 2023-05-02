const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};
const dbBooks=[ {id:1, titulli:"Beni ecen nuk vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"}, 
                {id:2, titulli:"Beni nashta ecen  vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"},
                {id:3, titulli:"Beni munde te ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"komedi"},
                {id:4, titulli:"Beni nuk ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"tjere"},
                {id:5, titulli:"Beni nuk eshte fukara", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
                {id:6, titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
                {id:6, titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
            ];

exports.getBookProfile=(req, res)=>{
    const id=req.params.id;
    const libriIDerguar=dbBooks[id-1];
    res.render("librat/profiliILibrit", {libri:libriIDerguar});
}

exports.getAllBooks=(req, res)=>{
    const zhanri=req.query;
    let zhanriAktiv="clear";
    if(!(Object.keys(zhanri).length === 0) && zhanri.zhanri!=="clear"){
        zhanriAktiv=zhanri.zhanri;
        const filterdBooks=dbBooks.filter((c)=>{
            return zhanri.zhanri===c.zhanri;
        });
        return res.render("librat/index",{titulliIfaqes:"Librat me zhaner: " + zhanri.zhanri, active: zhanriAktiv, librat: filterdBooks});
    }
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: dbBooks, active: zhanriAktiv})
}

//module.exports=dbBooks;