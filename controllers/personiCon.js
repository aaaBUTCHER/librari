const Ndertesa = require("../models/Personi");

exports.merriTeGjithaNdertesat = async (req, res) => {
    res.render("mbrojtje-qeshor/personiView", {
        title: "Personi",
        personi: await Ndertesa.thirriKejtSHOQETjoNdertesatThirri(),
        errorActive: "none",
        isAuthenticated: req.session.isLoggedIn,
        privilege: req.session.user.privilegji
    });
}