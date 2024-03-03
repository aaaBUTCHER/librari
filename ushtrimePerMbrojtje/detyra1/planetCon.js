const Planetet = require("./Planet");
var titulli = "Planet";

exports.merriTeGjitha = async (req, res) => {
    res.render("ushtrimePerMbrojtjeView/detyra1/planetView", {
        title: titulli,
        objekti1: await Planetet.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.name;
    const t = req.body.type;
    const objektiRi = new Planetet(n, t);

    try {
        await objektiRi.shtoNjeNeDb();
    } catch (err) {
        console.log(err);
    }

        //qekjo po punojka - veq mos harro ma von me rregullu punen e errorrit qe tshfaqet kur nuk i ki thdanat mir psh mu kan veq nr e sene
    res.redirect(`/planet`);
}