const Planetet = require("../models/Planetet");// i thirrum edhe planetet se na vyn te dropdows
const Sateliti = require("../models/Sateliti");

exports.merriTeGjithSatelitet = async (req, res) => {
    res.render("mbrojtje-nentor/d1/satelitView", {
        title: "Satelit",
        planet: await Planetet.thirriKejtPlanetetPrejDb(),
        satelit: await Sateliti.thirriKejtSatelitetPrejDb(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}

exports.shtoNjeSatelit = async (req, res) => {
        const n = req.body.name;
        const p = req.body.planetId;
        const satelit = new Sateliti(n, p);
    
        try {
            await satelit.shtoNjeSatelitetNeDb();
            s = await Sateliti.thirriKejtSatelitetPrejDb();
            console.log(s)
            p2 = await Planetet.thirriKejtPlanetetPrejDb();
            console.log("----------")
            console.log(p2)
            console.log("u thirren te gjitha bankat nga export.shtoNjeBank{\n"+s+"}");
            await res.render("mbrojtje-nentor/d1/satelitView", {
                title: "Satelit",
                planet: p2,
                satelit: s,
                errorActive: "none",
                isAuthenticated: req.session.isLoggedIn,
                privilege: req.session.user.privilegji
            });
        } catch (err) {
            console.log(err);
            res.render("mbrojtje-nentor/d1/satelitView", {
                title: "Satelit",
                planet: await Planetet.thirriKejtPlanetetPrejDb(),
                satelit: await Sateliti.thirriKejtSatelitetPrejDb(),
                errorActive: "block",
                err: err,
                isAuthenticated: req.session.isLoggedIn,
                privilege: req.session.user.privilegji
            });
        }
    }

    exports.merreNjeSatelit = async (req, res) => {
        try {
            
            const id = req.params.id;
            //qeta spe di ku e merr
            const n = await Sateliti.merreNjeSatelitPrejDb(id);
            //console.log("hejjjjjjjjjj0--",n)
            
            let formattedData = null;
            
            // qet pjesen e  ifit apet me xhaxhin GPT
            if (Array.isArray(n) && n.length > 0) {
                const firstObject = n[0][0];
    
                formattedData = {
                    satelitId: firstObject.satelitId,
                    name: firstObject.name,
                    isDeletet: firstObject.isDeletet,
                    planetId: firstObject.planetId
                };
            }
            console.log(formattedData)
            res.render("mbrojtje-nentor/d1/satelitEditView", {
                title: "Sateliti",
                satelit: formattedData,
                planet: await Planetet.thirriKejtPlanetetPrejDb(),
                isAuthenticated: req.session.isLoggedIn,
                privilege: req.session.user.privilegji,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred.");
        }
    }


    exports.perditsoNjeSatelit = async (req, res) => {
        const id = req.params.id;
        const n = req.body.name;
        console.log(n)
        const p = req.body.planetId;
    
        try {
            // Update the "Banka" record in the database
            const uS = new Sateliti(n, p);

            console.log(uS)

            const result = await uS.perditsoSatelitinNeDb(id);
    
            if (result) {
                // Redirect to a success page or updated "banka" record view
                console.log("tebankaCon.js u editu me sukses- exports.perditsoBanken")
                res.redirect(`/satelit`);
            } else {
                // Handle errors if the update was unsuccessful
                console.log("tebankaCon.js su editu me sukses- exports.perditsoBanken")
                res.status(500).send("Update failed.");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred.");
        }
    }

    exports.fshijeNjeSatelit = async (req, res) => {
        var errori = 'U fshie me sukses';
        try {
            await Sateliti.fshijeNjeSatelitPrejDb(req.params.id);
        } catch (err) {
            errori = err;
        }
    
        await res.render("mbrojtje-nentor/d1/satelitView", {
            title: "Satelit",
            planet: await Planetet.thirriKejtPlanetetPrejDb(),
            satelit: await Sateliti.thirriKejtSatelitetPrejDb(),
            errorActive: "none",
            isAuthenticated: req.session.isLoggedIn,
            privilege: req.session.user.privilegji,
            err: errori
        });
    }