const Satellite = require("./Satellite");
const Planet = require("./Planet");


exports.merriTeGjitha = async (req, res) => {
    res.render("mbrojtjetest/satelliteView", {
        title: "Titulli",
        objektet1: await Satellite.thirriKejtPrejDb(),
        objektet2: await Planet.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.krijoNje = async (req, res) => {
    const e = req.body.name;
    const d = req.body.planetId;
    const objektiRi = new Satellite(e, d);

    try {
        objektiRi.shtoNjePrejDb()
    } catch (err) {
        console.log(err);
    }
    res.redirect('/satellite');
}

exports.fshijeNje = async (req, res) => {
    try {
        await Satellite.hekeNjePrejDb(req.params.id);
    } catch (err) {
        errori = err;
    }
    res.redirect('/satellite');
}

exports.merreNje = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("hiiiiiiiiiiiii"+id);
        const n = await Satellite.thirreNjePrejDb(id);

        //qet if me chatGPT
        let formattedData = null;
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                satelliteId: firstObject.satelliteId,
                name: firstObject.name,
                planetId: firstObject.planetId
            };
        }
        
        res.render("mbrojtjetest/satelliteEditView", {
            title: "Titulli",
            objektet1: formattedData,
            objektet2: await Planet.thirriKejtPrejDb(),
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}


exports.updateNje = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    console.log(name);
    const planetId = req.body.planetId;

    try {
        const updated = new Satellite(name, planetId);
        console.log(updated);
        const result = await updated.updateNjePrejDb(id);

        if (result) {
            // Redirect to a success page or updated "Ndertesa" record view
            res.redirect(`/satellite`);
        } else {
            // Handle errors if the update was unsuccessful
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};