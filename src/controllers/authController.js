import { register, login } from "../services/auth.js";

export async function registerController(req, res) {
  try {
    const userData = req.body;
    const newUser = await register(userData);

    return res.status(201).json({
      message: "Usuário registrado com sucesso",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao efetuar registro" });
  }
}

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token: token,
    });
  } catch (error) {
    return res.status(400).json({ message: "Erro ao efetuar login" });
  }
}
