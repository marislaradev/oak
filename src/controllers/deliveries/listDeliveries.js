const knex = require("../../database/connection");

const listDeliveries = async (req, res) => {
  try {
    const deliveries = await knex("controle_entregas").select("*");
    res.json(deliveries);
  } catch (error) {
    console.error("Erro ao listar entregas:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = listDeliveries;