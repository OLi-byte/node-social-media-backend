import { createComment } from "../services/commentService.js";

export async function createCommentController(req, res) {
  try {
    const { postId, content } = req.body;
    const userId = req.userId;

    const comment = await createComment(userId, postId, content);

    res.status(201).json({
      message: "O comentário foi criado com sucesso",
      comment: comment,
    });
  } catch (error) {
    console.error("Não foi possível criar o comentário: ", error.message);
    res.status(500).json({
      message: "Não foi possível criar o comentário",
    });
  }
}
