const Planetet = require("../models/Planetet");

exports.merriTeGjithaPlanetet = async (req, res) => {
    res.render("mbrojtje-nentor/d1/planetetView", {
        title: "Planetet",
        planet: await Planetet.thirriKejtPlanetetPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNjePlanet = async (req, res) => {
        const n = req.body.name;
        const t = req.body.type;
        const planeti = new Planetet(n, t);
    
        try {
            await planeti.shtoNjePlanetNeDb();
            p = await  Planetet.thirriKejtPlanetetPrejDb();
            console.log("u thirren te gjitha bankat nga export.shtoNjeBank{\n"+planet+"}");
            await res.render("mbrojtje-nentor/d1/planetetView", {
                title: "Planetet",
                planet: p,
                errorActive: "none",
                isAuthenticated: req.session.isLoggedIn,
                privilege: req.session.user.privilegji
            });
        } catch (err) {
            console.log(err);
            res.render("mbrojtje-nentor/d1/planetetView", {
                title: "Planetet",
                planet: await  Planetet.thirriKejtPlanetetPrejDb(),
                errorActive: "block",
                err: err,
                isAuthenticated: req.session.isLoggedIn,
                privilege: req.session.user.privilegji
            });
        }
    }