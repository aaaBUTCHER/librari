const Ashencori = require("../models/Ashencori");

exports.merreNjeAshencor = async (req, res) => {
    try {
        const id = req.params.id;
        const n = await Ashencori.thirreQetAshencor(id);
        //console.log("hejjjjjjjjjj0--",n)
        
        let formattedData = null;
        
        // qet pjesen e  ifit apet me xhaxhin GPT
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                id: firstObject.id,
                Emertimi212261491: firstObject.Emertimi212261491,
                NderteSaID: firstObject.NderteSaID
            };
        }
        
        res.render("mbrojtje-shtator/ashencoriEditView", {
            title: "Ashencori",
            ashencori: formattedData,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}



exports.fshijeNjeAshencor = async (req, res) => {
    var errori = 'U fshie me sukses';
    try {
        await Ashencori.hekeNjeAshencor(req.params.id);
    } catch (err) {
        errori = err;
    }

    await res.render("mbrojtje-shtator/ashencori", {
        title: "Ashencori",
        ashencori: await Ashencori.thirriKejtSHOQETjoAshencortThirri(),
        ndertesat: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji,
        err: errori
    });
}

exports.merriTeGjithAshencoret = async (req, res) => {
    res.render("mbrojtje-shtator/ashencoriView", {
        title: "Ashencori",
        ashencori: await Ashencori.thirriKejtSHOQETjoAshencortThirri(),
        ndertesat: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

const Ndertesa = require("../models/Ndertesa");

exports.krijoNjeAshencor = async (req, res) => {
    const e = req.body.emertimi212261491;
    const d = req.body.nderteSaID;
    const ashencori = new Ashencori(e, d);

    try {
        await ashencori.shtoNjeAshencor()
        await res.render("mbrojtje-shtator/ashencoriView", {
            title: "Ashencori",
            ashencori: await Ashencori.thirriKejtSHOQETjoAshencortThirri(),
            ndertesat: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtje-shtator/ashencoriView", {
            title: "Ashencori",
            ashencori: await Ashencori.thirriKejtSHOQETjoAshencortThirri(),
            ndertesat: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }

}

//me chatGPT
exports.updateAshencori = async (req, res) => {
    const id = req.params.id;
    const emertimi212261491 = req.body.emertimi212261491;
    console.log(emertimi212261491)
    const nderteSaID = req.body.nderteSaID;

    try {
        // Update the "Ndertesa" record in the database
        const updatedAshencori = new Ashencori(emertimi212261491, nderteSaID);
        const result = await updatedAshencori.updateAshencori(id);

        if (result) {
            // Redirect to a success page or updated "Ndertesa" record view
            res.redirect(`/ashencori`);
        } else {
            // Handle errors if the update was unsuccessful
            res.status(500).send("Update failed.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
};


//i kopjova nga bookprofile.js edhe i modifikova