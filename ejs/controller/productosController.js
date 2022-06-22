const Producto = require('../model/productos')
const producto = new Producto("productos.json");

const addProducto = async (req, res) => {
    try{
        const {title, price, thumbnail} = req.body
        const productos = {
            title, price, thumbnail
        };
        const id = await producto.save(productos)
        if(id){
            res.redirect("/")
        }
    }catch(e){
        console.log(`Error al carcar un producto ${e.message}`)
    }
}

const getAllProductos = async (req, res) => {
    try{
        const productos = await producto.getAll();
        res.render("partials/lista", {productos})
    }catch(e){
        console.log(`Ocurrio un error al mostrar los productos ${e.message}`)
    }
}

module.exports = {
    addProducto,
    getAllProductos,
};