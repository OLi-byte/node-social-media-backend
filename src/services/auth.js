import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function register(userData) {
  const { username, email, password, isAdmin } = userData;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new Error("Usuário já existe");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
        isAdmin,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function login(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Credenciais inválidas");
    }

    const token = JWT.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
