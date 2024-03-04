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
    const d = req.body.teamId;
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
    const teamId = req.body.teamId;

    try {
        const updated = new Player(name, number,birthYear, teamId);
        const result = await updated.updateNjePrejDb(id);

        if (result) {
            res.redirect(`/player`);
        } else {
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};