const Ndertesa = require("../models/Ndertesa");
exports.merreNjeNdertes = async (req, res) => {
    try {
        const id = req.params.id;
        const n = await Ndertesa.thirreQetNdertes(id);

        //qet if me chatGPT
        let formattedData = null;
        if (Array.isArray(n) && n.length > 0) {
            const firstObject = n[0][0];

            formattedData = {
                ID: firstObject.ID,
                Emri212261491: firstObject.Emri212261491,
                DataPT: firstObject.DataPT.toISOString()
            };
        }
        
        res.render("mbrojtje-shtator/ndertesaEditView", {
            title: "Ndertesa",
            ndertesa: formattedData,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}


exports.fshijeNjeNdertes = async (req, res) => {
    var errori = 'U fshie me sukses';
    try {
        await Ndertesa.hekeNjeNdertes(req.params.id);
    } catch (err) {
        errori = err;
    }

    await res.render("mbrojtje-shtator/ndertesaView", {
        title: "Ndertesa",
        ndertesa: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji,
        err: errori
    });
}

exports.merriTeGjithaNdertesat = async (req, res) => {
    res.render("mbrojtje-shtator/ndertesaView", {
        title: "Ndertesa",
        ndertesa: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.krijoNjeNdertes = async (req, res) => {
    const e = req.body.emri212261491;
    const d = req.body.dataPT;
    const ndertesa = new Ndertesa(e, d);

    try {
        ndertesa.shtoNjeNdertes()
        n = await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        console.log(n)
        await res.render("mbrojtje-shtator/ndertesaView", {
            title: "Ndertesa",
            ndertesa: n,
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    } catch (err) {
        console.log(err);
        res.render("mbrojtje-shtator/ndertesaView", {
            title: "Ndertesa",
            ndertesa: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
            errorActive: "block",
            err: err,
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji
        });
    }

}

//me chatGPT
exports.updateNdertesa = async (req, res) => {
    const id = req.params.id;
    const emri212261491 = req.body.emri212261491;
    const dataPT = req.body.dataPT;

    try {
        // Update the "Ndertesa" record in the database
        const updatedNdertesa = new Ndertesa(emri212261491, dataPT);
        const result = await updatedNdertesa.updateNdertesa(id);

        if (result) {
            // Redirect to a success page or updated "Ndertesa" record view
            res.redirect(`/ndertesa`);
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