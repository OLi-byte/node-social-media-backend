import { createFriendRequest } from "../services/friendRequestService.js";

export async function createFriendRequestController(req, res) {
  const userId = req.userId;
  const receiverId = req.body.receiverId;

  try {
    const request = await createFriendRequest(userId, receiverId);

    res
      .status(201)
      .json({ message: "Solicitação enviada com sucesso", request: request });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Erro ao enviar solicitação de amizade" });
  }
}
