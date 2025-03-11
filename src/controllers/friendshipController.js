import { acceptFriendRequest } from "../services/friendshipService.js";

export async function acceptFriendRequestController(req, res) {
  const userId = req.userId;
  const senderId = req.body.senderId;

  try {
    const updatedRequest = await acceptFriendRequest(userId, senderId);

    res.status(200).json({
      message: "Solicitação de amizade aceita com sucesso",
      request: updatedRequest,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Falha ao aceitar solicitação de amizade" });
  }
}
