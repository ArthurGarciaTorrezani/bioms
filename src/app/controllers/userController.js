import { coisasAsefazer } from "../services/userService.js";

async function createUser(req, res) {
  const data = req.body;
  const user = await coisasAsefazer.createUser(data);
  console.log(user); 
}


export const userController = {
  createUser,
};
