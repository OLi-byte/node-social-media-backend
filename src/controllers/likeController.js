import { createLike } from "../services/likeService.js";

export async function createLikeController(req, res) {
  const { postId } = req.body;
  const userId = req.userId;

  if (!postId) {
    return res.status(400).json({ message: "Post ID é necessário!" });
  }

  try {
    const like = await createLike(userId, postId);

    res
      .status(201)
      .json({ message: "O post foi curtido com sucesso", like: like });
  } catch (error) {
    if (error.message === "Você já curtiu esse post!") {
      return res.status(400).json({ message: error.message });
    }

    return res
      .status(500)
      .json({ message: "Erro ao dar like no post", error: error.message });
  }
}
