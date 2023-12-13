const Banka = require("../models/Banka");

exports.merriTeGjithaBankat = async (req, res) => {
    res.render("mbrojtje-qershor/bankaView", {
        title: "Banka",
        banka: await Banka.thirriKejtBankat(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNjeBank = async (req, res) => {
    const e = req.body.emri212261491;
    const banka = new Banka(e);

    try {
        await banka.shtoNjeBankClass()
        n = await Banka.thirriKejtBankat(),
        console.log("u thirren te gjitha bankat nga export.shtoNjeBank{\n"+n+"}");
        await res.render("mbrojtje-qershor/bankaView", {
            title: "Banka",
            banka: n,
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtje-qershor/bankaView", {
            title: "Banka",
            banka: await Banka.thirriKejtBankat(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }
}

exports.merreNjeBanke = async (req, res) => {
    try {
        const id = req.params.id;
        const n = await Banka.thirreQetBanke(id);
        //qet if me chatGPT
        let formattedData = null;
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                id212261491: firstObject.id212261491,
                emri212261491: firstObject.emri212261491,
            };
        }
        
        res.render("mbrojtje-qershor/bankaEditView", {
            title: "Banka",
            banka: formattedData,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}

//me chatGPT
exports.perditsoBanken = async (req, res) => {
    const id = req.params.id;
    const emri212261491 = req.body.emri212261491;

    try {
        // Update the "Banka" record in the database
        const updatedBanka = new Banka(emri212261491);
        const result = await updatedBanka.updateBanka(id);

        if (result) {
            // Redirect to a success page or updated "banka" record view
            console.log("tebankaCon.js u editu me sukses- exports.perditsoBanken")
            res.redirect(`/banka`);
        } else {
            // Handle errors if the update was unsuccessful
            console.log("tebankaCon.js su editu me sukses- exports.perditsoBanken")
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};

exports.fshijeBanken = async (req, res) => {
    var errori = 'U fshie me sukses';
    try {
        await Banka.hekeNjeBanke(req.params.id);
    } catch (err) {
        errori = err;
    }

    await res.render("mbrojtje-qershor/bankaView", {
        title: "Banka",
        banka: await Banka.thirriKejtBankat(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji,
        err: errori
    });
}


//i kopjova nga bookprofile.js edhe i modifikova