const knex = require("../../database/connection");

const listProducts = async (req, res) => {
  try {
    const products = await knex("products").select("*");
    res.json(products);
  } catch (error) {
    console.error("Erro ao listar produtos", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = listProducts;
