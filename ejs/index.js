const express = require('express');
const app = express()
const routerProductos = require("./rutas/rutas");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/api/productos", routerProductos);

app.get("/", (req, res) => {
    res.redirect("/api/productos");
  });
  
  app.get("/api/productos", (req, res) => {
    res.render("partials/formProductos");
  });


app.listen(8080, () => {
    console.log(`Servidor levantado en el puerto 8080`)
})