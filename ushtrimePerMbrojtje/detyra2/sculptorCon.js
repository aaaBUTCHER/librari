const Objekti1 = require("./Sculptor");
var titulli = "sculptor";
var redirect = "/sculptor"

exports.merriTeGjitha = async (req, res) => {
    console.log(await Objekti1.thirriKejtPrejDb())
    res.render("ushtrimePerMbrojtjeView/detyra2/sculptorView", {
        title: titulli,
        objekti1: await Objekti1.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.name;
    const t = req.body.birthYear;
    const objektiRi = new Objekti1(n, t);

    try {
        await objektiRi.shtoNjeNeDb();
    } catch (err) {
        console.log(err);
    }
    res.redirect(redirect);
}