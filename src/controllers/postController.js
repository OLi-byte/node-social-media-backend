import { createPost } from "../services/postService.js";

export async function createPostController(req, res) {
  try {
    const { title, description } = req.body;
    const userId = req.userId;

    const newPost = await createPost(title, description, userId);

    return res
      .status(201)
      .json({ message: "Post criado com sucesso", post: newPost });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar post" });
  }
}
