const knex = require("../../database/connection");

const motoboyStats = async (req, res) => {
  try {
    const { entregador_id, year, month } = req.query;

    if (!entregador_id || !year || !month) {
      return res.status(400).json({ error: "Entregador, ano e mês são obrigatórios" });
    }

    const stats = await knex("controle_entregas")
      .count("id as total")
      .where("entregador_id", entregador_id)
      .andWhereRaw("EXTRACT(YEAR FROM data_entrega) = ?", [year])
      .andWhereRaw("EXTRACT(MONTH FROM data_entrega) = ?", [month]);

    res.status(200).json(stats);
  } catch (error) {
    console.error("Erro ao obter estatísticas por entregador:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = motoboyStats;
