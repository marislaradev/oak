const knex = require("../../database/connection");

const deliveryStats = async (req, res) => {
  try {
    const { year, month } = req.query;

    if (!year || !month) {
      return res.status(400).json({ error: "Ano e mês são obrigatórios" });
    }

    //contar entregas por tipo
    const stats = await knex("controle_entregas")
      .select("tipo_entrega")
      .count("id as total")
      .whereRaw("EXTRACT(YEAR FROM data_entrega) = ?", [year])
      .andWhereRaw("EXTRACT(MONTH FROM data_entrega) = ?", [month])
      .groupBy("tipo_entrega");

    res.status(200).json(stats);
  } catch (error) {
    console.error("Erro ao obter estatísticas de entregas:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = deliveryStats;
