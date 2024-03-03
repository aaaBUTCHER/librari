const Sateliti = require("./Satellite");
const Planetet = require("./Planet");

var titulli = "Satellit";
var pathi2 = "satellite";

exports.merriTeGjitha = async (req, res) => {
    res.render("ushtrimePerMbrojtjeView/detyra1/satelliteView", {
        title: titulli,
        objekti1: await Sateliti.thirriKejtPrejDb(),
        objekti2: await Planetet.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.name;
    const p = req.body.planetId;
    const satelit = new Sateliti(n, p);

    try {
        await satelit.shtoNjeNeDb();
    } catch (err) {
        console.log(err);
    }

    res.redirect(`/`+pathi2);
}

exports.merreNje = async (req, res) => {
    try {
        
        const id = req.params.id;
        const n = await Sateliti.merreNjePrejDb(id);
        
        // qet pjesen e  ifit apet me xhaxhin GPT
            let formattedData = null;
            if (Array.isArray(n) && n.length > 0) {
                const firstObject = n[0][0];

                formattedData = {
                    satelitId: firstObject.satelitId,
                    name: firstObject.name,
                    isDeletet: firstObject.isDeletet,
                    planetId: firstObject.planetId
                };
            }
        console.log(formattedData)
        //dej qetu 

        res.render("ushtrimePerMbrojtjeView/detyra1/satelliteEditView", {
            title: titulli,
            satelit: formattedData,
            planet: await Planetet.thirriKejtPrejDb(),
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
    const p = req.body.planetId;

    try {

        const objektiPerditsuar = new Sateliti(n, p);
        const result = await objektiPerditsuar.perditsoNeDb(id);

        if (result) {
            console.log("PERDITSIMI I OBJEKTIT U KRYE ME SUKSES");
            res.redirect(`/`+pathi2);
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
        await Sateliti.fshijeNjeSatelitPrejDb(req.params.id);
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/`+pathi2);
}