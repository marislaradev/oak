const express = require("express");
const registerProduct = require("./controllers/products/registerProduct");
const listProducts = require("./controllers/products/listProducts");
const updateProduct = require("./controllers/products/updateProduct");
const deleteProduct = require("./controllers/products/deleteProduct");

const routes = express();

routes.post("/products", registerProduct);
routes.get("/products", listProducts);
routes.put("/products/:id", updateProduct);
routes.delete("/products/:id", deleteProduct);

module.exports = routes;
