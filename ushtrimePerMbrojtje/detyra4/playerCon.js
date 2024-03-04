const Objekti1 = require("./Player");
const Objekti2 = require("./Team");

var titulli = "player";

exports.merriTeGjitha = async (req, res) => {
    res.render("ushtrimePerMbrojtjeView/detyra4/playerView", {
        title: titulli,
        objekti1: await Objekti1.thirriKejtPrejDb(),
        objekti2: await Objekti2.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.name;
    console.log(n)
    const m = req.body.number;
    const b = req.body.birthYear;
    const p = req.body.teamId;
    const objektiRi = new Objekti1(n, m, b, p);
    console.log(objektiRi)

    try {
        await objektiRi.shtoNjeNeDb();
    } catch (err) {
        console.log(err);
    }

    res.redirect("/player");
}


exports.fshijeNje = async (req, res) => {
    try {
        console.log(req.params.id);
        await Objekti1.fshijeNjePrejDb(req.params.id);
    } catch (err) {
        console.log(err)
    }
    console.log("u fshi2");
    res.redirect("/player");
}