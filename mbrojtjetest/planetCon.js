const Planet = require("./Planet");

exports.merriTeGjith = async (req, res) => {
    res.render("mbrojtjetest/planetView", {
        title: "Titulli",
        objektet: await Planet.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}
exports.krijoNje = async (req, res) => {
    const e = req.body.name;
    const d = req.body.type;
    const objektiRi = new Planet(e, d);

    try {
        await objektiRi.shtoNjeNeDb()
        
    } catch (err) {
        console.log(err);
    }

    res.redirect('/planet');
}
