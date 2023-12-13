const Personi = require("../models/Personi");
const Banka= require("../models/Banka");

exports.merriTeGjithePersonat = async (req, res) => {
    res.render("mbrojtje-qeshor/personiView", {
        title: "Personi",
        personi: await Personi.thirriKejtPersonat(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.merreNjePerson = async (req, res) => {
    try {
        const id51835 = req.params.id;
        const n = await Personi.thirreQetPerson(id51835);
        //console.log("hejjjjjjjjjj0--",n)
        
        let formattedData = null;
        
        // qet pjesen e  ifit apet me xhaxhin GPT
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                id51835: firstObject.id51835,
                emri51835: firstObject.emri51835,
                mbiemri51835: firstObject.mbiemri51835,
                bankaid: firstObject.bankaid
            };
        }
        
        res.render("mbrojtje-qershor/personiEditView", {
            title: "Personi",
            personi: formattedData,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}



exports.fshijeNjePerson = async (req, res) => {
    var errori = 'U fshie me sukses';
    console.log("1");
    try {
        await Personi.hekeNjePerson(req.params.id);
        console.log(req.params.id);
    } catch (err) {
        errori = err;
    }

    await res.render("mbrojtje-qershor/personiView", {
        title: "Personi",
        personi: await Personi.thirriKejtPersonat(),
        bankat: await Banka.thirriKejtBankat(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji,
        err: errori
    });
}

exports.merriTeGjithePersonat = async (req, res) => {
    res.render("mbrojtje-qershor/personiView", {
        title: "Personi",
        personi: await Personi.thirriKejtPersonat(),
        bankat: await Banka.thirriKejtBankat(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.krijoNjePerson = async (req, res) => {
    const e = req.body.emri51835;
    const m = req.body.mbiemri51835;
    const b = req.body.bankaid;
    console.log(e,m,b);
    const personi = new Personi(e, m, b);

    try {
        await personi.shtoNjePerson()
        await res.render("mbrojtje-qershor/personiView", {
            title: "Personi",
            personi: await Personi.thirriKejtPersonat(),
            bankat: await Banka.thirriKejtBankat(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtje-qershor/personiView", {
            title: "Personi",
            personi: await Personi.thirriKejtPersonat(),
            bankat: await Banka.thirriKejtBankat(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }

}

//me chatGPT
exports.updatePersoni = async (req, res) => {
    const id51835 = req.params.id;
    const emri51835 = req.body.emri51835;
    const mbiemri51835 = req.body.mbiemri51835;
    const bankaid = req.body.bankaid;

    try {
        // Update the "Ndertesa" record in the database
        const updatedPersoni = new Personi(emri51835, mbiemri51835,  bankaid);
        const result = await updatedPersoni.updatePersoni(id51835);

        if (result) {
            // Redirect to a success page or updated "Ndertesa" record view
            res.redirect(`/personi`);
        } else {
            // Handle errors if the update was unsuccessful
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};