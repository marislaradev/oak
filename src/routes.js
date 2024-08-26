const express = require("express");
const registerDelivery = require("./controllers/deliveries/registerDelivery");
const listDeliveries = require("./controllers/deliveries/listDeliveries");

// const registerProduct = require("./controllers/products/registerProduct");
// const listProducts = require("./controllers/products/listProducts");
// const updateProduct = require("./controllers/products/updateProduct");
// const deleteProduct = require("./controllers/products/deleteProduct");

const routes = express();

routes.post("/deliveries", registerDelivery);
routes.get("/deliveries", listDeliveries);

// routes.post("/products", registerProduct);
// routes.get("/products", listProducts);
// routes.put("/products/:id", updateProduct);
// routes.delete("/products/:id", deleteProduct);

module.exports = routes;
