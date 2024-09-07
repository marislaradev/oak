const express = require("express");
const registerDelivery = require("./controllers/deliveries/registerDelivery");
const listDeliveries = require("./controllers/deliveries/listDeliveries");
const monthlyStats = require("./controllers/stats/monthlyStats");
const dailyStats = require("./controllers/stats/dailyStats");
const motoboyStats = require("./controllers/stats/motoboyStats");

const routes = express();

routes.post("/deliveries", registerDelivery);
routes.get("/deliveries", listDeliveries);
routes.get("/stats", monthlyStats);
routes.get("/stats/motoboy", motoboyStats);
routes.get("/stats/daily/:date", dailyStats);

module.exports = routes;
