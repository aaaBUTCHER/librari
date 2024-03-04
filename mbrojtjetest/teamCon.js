const Team = require("./Team");
const Player = require("./Player")

exports.merriTeGjith = async (req, res) => {
    res.render("mbrojtjetest/teamView", {
        title: "Titulli",
        objektet: await Team.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}
exports.krijoNje = async (req, res) => {
    const e = req.body.name;
    const objektiRi = new Team(e);

    try {
        await objektiRi.shtoNjeNeDb()
        
    } catch (err) {
        console.log(err);
    }

    res.redirect('/team');
}

exports.merreNje = async (req, res) => {
    try {
        const id = req.params.id;
        const n = await Team.thirreNjePrejDb(id);

        let formattedData = null;
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                teamId: firstObject.teamId,
                name: firstObject.name
            };
        }
        
        res.render("mbrojtjetest/teamEditView", {
            title: "Titulli",
            objektet: formattedData,
            objektet2: await Player.thirriKejtPrejDb(),
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

    try {
        const updated = new Team(name);
        const result = await updated.updateNjePrejDb(id);

        if (result) {
            res.redirect(`/team`);
        } else {
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};
