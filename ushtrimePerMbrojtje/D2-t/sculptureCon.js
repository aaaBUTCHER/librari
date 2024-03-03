const Sculpture = require("./Sculpture");
const Sculptor = require("./Sculptor");

exports.merriTeGjith = async (req, res) => {
    res.render("mbrojtjaNentorD2/sculptureView", {
        title: "Titulli",
        objektet1: await Sculpture.thirriKejtPrejDb(),
        objektet2: await Sculptor.thirriKejtPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNje = async (req, res) => {
    const n = req.body.title;
    const m = req.body.materiali;
    const p = req.body.sculptorId;
    const objektiRi = new Sculpture(n, m, p);

    try {
        console.log("11")
        await objektiRi.shtoNjeNeDb();
        console.log("22")
        await res.render("mbrojtjaNentorD2/sculptureView", {
            title: "Titullli",
            objektet1: await Sculpture.thirriKejtPrejDb(),
            objektet2: await Sculptor.thirriKejtPrejDb(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtjaNentorD2/sculptureView", {
            title: "Titulli",
            objektet1: await Sculpture.thirriKejtPrejDb(),
            objektet2: await Sculptor.thirriKejtPrejDb(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }
}

exports.merreNje = async (req, res) => {
    try {
        
        const id = req.params.id;
        const objekteti = await Sculpture.merreNjePrejDb(id);
        console.log(objekteti)
    
        // qet pjesen e  ifit apet me xhaxhin GPT
            let formattedData = null;
            if (Array.isArray(n) && objekteti.length > 0) {
                const firstObject = objekteti[0][0];
    
                formattedData = {
                    skulptureID: firstObject.skulptureID,
                    title: firstObject.title,
                    materiali: firstObject.materiali,
                    isDeleted: firstObject.isDeleted,
                    sculptorId: firstObject.sculptorId
                };
            }
            console.log(formattedData)
        //dej qetu
        
        res.render("mbrojtjaNentorD2/sculptureView", {
            title: "Titulli",
            objektet1: formattedData,
            objektet2: await Sculptor.thirriKejtPrejDb(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}

exports.perditsoNje = async (req, res) => {
    const id = req.params.id;
    const n = req.body.title;
    const m = req.body.materiali;
    const p = req.body.sculptorId;

    try {
        const objektiRi = new Sculpture(n, m, p);

        const result = await objektiRi.perditsoNeDb(id);

        if (result) {
            console.log("update was successful \n");
            res.redirect(`/sculpture`);
        } else {
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}

exports.fshijeNje = async (req, res) => {
    var errori = 'U fshie me sukses';
    try {
        await Sculpture.fshijeNjePrejDb(req.params.id);
    } catch (err) {
        errori = err;
    }

    await res.render("mbrojtjaNentorD2/sculptureView", {
        title: "Titulli",
        objektet1: await Sculpture.thirriKejtPrejDb(),
        objektet2: await Sculptor.thirriKejtPrejDb(),
        errorActive: "block",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji,
        err: errori
    });
}