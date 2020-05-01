
const Testimoniales = require('../models/Testimoniales')
exports.mostrarTestimoniales = async (req,res)=>{
    const testimoniales=  await Testimoniales.findAll()
     res.render('testimoniales',{pagina:'Testimoniiales',
      testimoniales
    
    })
    
       }
       
       exports.agregarTestimoniales= async (req,res)=>{
        const {nombre,correo,mensaje} = req.body
  let errores=[]
       if(!nombre){
  errores.push({'mensaje':'Agregar tu Nombre'})
       }
       if(!correo){
          errores.push({'mensaje':'Agregar tu Correo'})
       }
       if(!mensaje){
          errores.push({'mensaje':'Agregar tu Mensaje'})
       }
  
       if(errores.length>0){
         const testimoniales = await Testimoniales.findAll()

  res.render('testimoniales',{
    errores,
    nombre,
    correo,
    mensaje,
  pagina:'Testimoniales',
testimoniales})


       }else{
  const crear = await Testimoniales.create({
      nombre,
      correo,
      mensaje
  })
  .then(testimonial =>res.redirect('/testimoniales'))
    .catch(error=>console.log(error))
       }
          }