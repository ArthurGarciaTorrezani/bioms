import { coisasAsefazer } from "../services/userService.js";
async function createUser(req, res) {
  const a = await coisasAsefazer.createUser(user);
  console.log(a);
  res.send(a);
}

export const userController = {
  createUser,
};
