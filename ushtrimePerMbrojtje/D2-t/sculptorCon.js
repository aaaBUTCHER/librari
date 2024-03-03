const Sculptor = require("./Sculptor");

exports.merriTeGjith = async (req, res) => {
    res.render("mbrojtjaNentorD2/sculptorView", {
        title: "Titulli",
        objektet1: await Sculptor.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const a = req.body.name;
    const b = req.body.birthYear;
    const objektiRi = new Sculptor(a, b);

    try {
        await objektiRi.shtoNjeNeDb();
        await res.render("mbrojtjaNentorD2/sculptorView", {
            title: "Titulli",
            objektet1: await Sculptor.thirriKejtPrejDb(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtjaNentorD2/sculptorView", {
            title: "Titulli",
            objektet1: await Sculptor.thirriKejtPrejDb(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }
}