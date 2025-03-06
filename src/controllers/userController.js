import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
} from "../services/userService.js";

export async function createUserController(req, res) {
  const { username, email, password, isAdmin } = req.body;

  try {
    const newUser = await createUserService(username, email, password, isAdmin);

    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: "Houve um problema ao criar o usuário",
    });
  }
}

export async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsersService();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Houve um problema ao buscar usuários",
    });
  }
}

export async function getUserByIdController(req, res) {
  const id = parseInt(req.params.id);

  try {
    const user = await getUserByIdService(id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Houve um problema ao buscar o usuário",
    });
  }
}
