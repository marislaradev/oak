const knex = require("../../database/connection");

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, value, available } = req.body;
    await knex("products").where({ id }).update({
      name,
      description,
      value,
      available,
    });

    const updatedProduct = await knex("products").where({ id }).first();

    res.json({
      message: "Produto atualizado com sucesso!",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Erro ao atualizar o produto", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = updateProducts;
