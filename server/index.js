const Express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const configs = require("./config");
require('dotenv').config({ path:'variables.env'})
const db = require("./config/database");
db.authenticate()
  .then(() => console.log("DB conectada"))
  .catch((error) => console.log(error));

const app = Express();

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "./views"));

app.use(Express.static("public"));

const config = configs[app.get("env")];

app.locals.titulo = config.nombre;

app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000;
app.listen(port,host,()=>{console.log('El servidor esta funcionando')});
