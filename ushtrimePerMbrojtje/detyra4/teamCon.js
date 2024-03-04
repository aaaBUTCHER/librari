const Objekti1 = require("./Team");
const Objekti2 = require("./Player");
var titulli = "team";
var redirect = "/team"
exports.merriTeGjitha = async (req, res) => {
    console.log(await Objekti1.thirriKejtPrejDb())
    res.render("ushtrimePerMbrojtjeView/detyra4/teamView", {
        title: titulli,
        objekti1: await Objekti1.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.name;
    const objektiRi = new Objekti1(n);

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
                    teamId: firstObject.teamId,
                    name: firstObject.name
                };
            }
        console.log(formattedData)
        //dej qetu 

        res.render("ushtrimePerMbrojtjeView/detyra4/teamEditView", {
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
    const n = req.body.name;

    try {
        console.log(id+"\n"+n);
        const objektiPerditsuar = new Objekti1(n);
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