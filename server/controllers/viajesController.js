const Viaje = require("../models/Viajes");
exports.mostrarViajes =async  (req, res) => {
  const viajes = await Viaje.findAll()

  res.render("viajes", { pagina: "Proximos Viajes", viajes })
    
    .catch((error) => console.log(error));
};

exports.mostrarViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id)
  res.render("viaje", { viaje })
};
