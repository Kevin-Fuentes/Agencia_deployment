const Viaje = require("../models/Viajes");
const Testimoniales = require("../models/Testimoniales");
exports.consultasHomepage = async (req, res) => {

  const viajes = await 
    Viaje.findAll({
      limit: 3,
    })
  
  const testimoniales =await 
    Testimoniales.findAll({
      limit: 3,
    })
  
      return res.render("index", {
        pagina: "Proximos Viajes",
        clase: "home",
        viajes,
        testimoniales
      })
    
  
};
