const Player = require("./Player");
const Team = require("./Team");


exports.merriTeGjitha = async (req, res) => {
    res.render("mbrojtjetest/playerView", {
        title: "Titulli",
        objektet1: await Player.thirriKejtPrejDb(),
        objektet2: await Team.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.krijoNje = async (req, res) => {
    const e = req.body.name;
    const b = req.body.number;
    const a = req.body.birthYear;
    const d = req.body.planetId;
    const objektiRi = new Player(e, d, a, b);

    try {
        objektiRi.shtoNjePrejDb()
    } catch (err) {
        console.log(err);
    }
    res.redirect('/player');
}

exports.fshijeNje = async (req, res) => {
    try {
        await Player.hekeNjePrejDb(req.params.id);
    } catch (err) {
        errori = err;
    }
    res.redirect('/player');
}

exports.merreNje = async (req, res) => {
    try {
        const id = req.params.id;
        const n = await Player.thirreNjePrejDb(id);

        //qet if me chatGPT
        let formattedData = null;
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                playerId: firstObject.playerId,
                name: firstObject.name,
                number: firstObject.number,
                birthYear: firstObject.birthYear,
                teamId: firstObject.teamId
            };
        }
        
        res.render("mbrojtjetest/playerEditView", {
            title: "Titulli",
            objektet1: formattedData,
            objektet2: await Team.thirriKejtPrejDb(),
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
    const number = req.body.number;
    const birthYear = req.body.birthYear;
    const planetId = req.body.planetId;

    try {
        const updated = new Satellite(name, number,birthYear, planetId);
        const result = await updated.updateNjePrejDb(id);

        if (result) {
            // Redirect to a success page or updated "Ndertesa" record view
            res.redirect(`/player`);
        } else {
            // Handle errors if the update was unsuccessful
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};