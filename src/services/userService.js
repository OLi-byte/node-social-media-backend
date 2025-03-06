import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUserService(username, email, password, isAdmin) {
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
        isAdmin,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Houve um problema ao criar o novo usuário", error.message);
  }
}

export async function getAllUsersService() {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários", error.message);
  }
}

export async function getUserByIdService(id) {
  try {
    const user = prisma.user.findUnique({
      where: { id: id },
    });

    return user;
  } catch (error) {
    console.error("Houve um problema ao buscar usuário", error.message);
  }
}
