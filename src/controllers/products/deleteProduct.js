const knex = require("../../database/connection");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("products").where({ id }).del();
    res.json({ message: "Produto excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir o produto", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = deleteProduct;
