const knex = require("../../database/connection");

const dailyStats = async (req, res) => {
  try {
    const { date } = req.params; 

    if (!date) {
      return res.status(400).json({ error: "Data não fornecida" });
    }

    const stats = await knex("controle_entregas")
      .select("tipo_entrega")
      .count("id as total")
      .where("data_entrega", date)  // Usando .where e não whereRaw
      .groupBy("tipo_entrega");

    res.json(stats);
  } catch (error) {
    console.error("Erro ao buscar estatísticas diárias:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = dailyStats;
