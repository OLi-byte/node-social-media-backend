import { createStats, updateStats } from "../services/statsService.js";

export async function createStatsController(req, res) {
  try {
    const userId = req.userId;
    const { stats, emoji } = req.body;

    if (!stats || !Array.isArray(stats) || stats.length !== 3) {
      return res.status(400).json({
        message: "Dados inválidos. Stats devem ser um array com 3 valores.",
      });
    }

    const newStatsRecord = await createStats(userId, stats, emoji);

    res
      .status(201)
      .json({ message: "Stats criados com sucesso", stats: newStatsRecord });
  } catch (error) {
    console.error("Erro ao criar stats:", error);
    res.status(500).json({
      message: "Houve um erro ao criar o stats",
      error: error.message,
    });
  }
}

export async function updateStatsController(req, res) {
  try {
    const userId = req.userId;
    const { stats, emoji } = req.body;

    if (!stats || !Array.isArray(stats) || stats.length !== 3) {
      return res.status(400).json({
        message: "Dados inválidos. Stats devem ser um array com 3 valores.",
      });
    }

    const updatedStats = await updateStats(userId, stats, emoji);

    res.status(200).json({
      message: "Stats atualizado com sucesso",
      updatedStats: updatedStats,
    });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({
        message: "Houve um erro ao atualizar o stats",
        error: error.message,
      });
  }
}
