const knex = require("../../database/connection");

const registerProduct = async (req, res) => {
  try {
    const { name, description, value, available } = req.body;
    await knex("products").insert({
      name,
      description,
      value,
      available,
    });
    res.status(201).json({ message: "Produto cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar o produto", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = registerProduct;
