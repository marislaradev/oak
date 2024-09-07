const knex = require("../../database/connection");

const listDeliveriesByMonth = async (req, res) => {
  try {
    const { year, month } = req.query;

    if (!year || !month) {
      return res.status(400).json({ error: "Ano e mês são obrigatórios" });
    }

    // Listar entregas do ano e mês informados
    const deliveries = await knex("controle_entregas")
      .select("*")
      .whereRaw("EXTRACT(YEAR FROM data_entrega) = ?", [year])
      .andWhereRaw("EXTRACT(MONTH FROM data_entrega) = ?", [month]);

    res.json(deliveries);
  } catch (error) {
    console.error("Erro ao listar entregas por mês:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = listDeliveriesByMonth;
