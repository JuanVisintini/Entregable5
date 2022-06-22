const express = require('express');
const path = require('path');
const { engine } = require("express-handlebars");
const routerProductos = require("./rutas/rutas")
const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: path.join(__dirname, './views/layout/main-layout.hbs'),
  layoutsDir: path.join(__dirname, './views/layout'),
  partialsDir: path.join(__dirname, './views/partials')
}))

app.set("views", path.join(__dirname, './views'))
app.set("view engine", "hbs");


app.use("/api/productos", routerProductos);


app.get("/", (req, res) => {
  res.redirect("/api/productos");
})

app.get("/api/productos", (req, res) => {
  res.render("formProductos");
});


app.listen('8080', () => {
    console.log('puerto levantado')
})