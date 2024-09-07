const express = require("express");
const registerDelivery = require("./controllers/deliveries/registerDelivery");
const listDeliveries = require("./controllers/deliveries/listDeliveries");
const deliveryStats = require("./controllers/stats/deliveryStats");

const routes = express();

routes.post("/deliveries", registerDelivery);
routes.get("/deliveries", listDeliveries);
routes.get("/stats", deliveryStats);

module.exports = routes;
