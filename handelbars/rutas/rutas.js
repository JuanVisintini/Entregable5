const { Router} = require("express");
const router = Router();
const { addProducto, getAllProductos} = require('../controller/productosController')

router.post("/create", addProducto);

router.get("/all", getAllProductos);

module.exports = router;