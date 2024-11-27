import prisma from "../../config/dataBaseConection.js";

async function createUser(data) {
  data = await prisma.user.create({
    data,
  });

  return data;
}

export const coisasAsefazer = {
  createUser,
};
