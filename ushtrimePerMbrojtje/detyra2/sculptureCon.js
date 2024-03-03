const Objekti1 = require("./Sculpture");
const Objekti2 = require("./Sculptor");

var titulli = "sculpture";
var redirect = "/sculpture"

exports.merriTeGjitha = async (req, res) => {
    res.render("ushtrimePerMbrojtjeView/detyra2/sculptureView", {
        title: titulli,
        objekti1: await Objekti1.thirriKejtPrejDb(),
        objekti2: await Objekti2.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.title;
    const m = req.body.material;
    const p = req.body.sculptorId;
    const objektiRi = new Objekti1(n, m, p);

    try {
        await objektiRi.shtoNjeNeDb();
    } catch (err) {
        console.log(err);
    }

    res.redirect(redirect);
}

exports.merreNje = async (req, res) => {
    try {
        
        const id = req.params.id;
        const njeObjektPrejDb = await Objekti1.merreNjePrejDb(id);
        
        // qet pjesen e  ifit apet me xhaxhin GPT
            let formattedData = null;
            if (Array.isArray(njeObjektPrejDb) && njeObjektPrejDb.length > 0) {
                const firstObject = njeObjektPrejDb[0][0];

                formattedData = {
                    sculptureId: firstObject.sculptureId,
                    title: firstObject.title,
                    material: firstObject.material,
                    isDeleted: firstObject.isDeleted,
                    sculptorId: firstObject.sculptorId
                };
            }
        console.log(formattedData)
        //dej qetu 

        res.render("ushtrimePerMbrojtjeView/detyra2/sculptureEditView", {
            title: titulli,
            objekti1: formattedData,
            objekti2: await Objekti2.thirriKejtPrejDb(),
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}


exports.perditsoNje = async (req, res) => {
    const id = req.params.id;
    const n = req.body.title;
    const m = req.body.material;
    const p = req.body.sculptorId;

    try {
        console.log(id+"\n"+n+"\n"+m+"\n"+p+"\n")
        const objektiPerditsuar = new Objekti1(n, m, p);
        console.log("hi222")
        console.log(objektiPerditsuar)
        const result = await objektiPerditsuar.perditsoNeDb(id);

        if (result) {
            console.log("PERDITSIMI I OBJEKTIT U KRYE ME SUKSES");
            res.redirect(redirect);
        } else {
            console.log("PERDITSIMI I OBJEKTIT DESHTOI")
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}

exports.fshijeNje = async (req, res) => {
    try {
        await Objekti1.fshijeNjePrejDb(req.params.id);
    } catch (err) {
        console.log(err)
    }

    res.redirect(redirect);
}