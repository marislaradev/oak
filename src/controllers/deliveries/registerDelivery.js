const knex = require("../../database/connection");

const registerDelivery = async (req, res) => {
  try {
    const { data_entrega, tipo_entrega, numero_pedido, entregador_id, nome_atendente } = req.body;
    await knex("controle_entregas").insert({
      data_entrega,
      tipo_entrega,
      numero_pedido,
      entregador_id,
      nome_atendente,
    });
    res.status(201).json({ message: "Entrega cadastrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao registrar a entrega:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = registerDelivery;