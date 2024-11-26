import {Router} from "express";
import { userController } from "../app/controllers/userController.js";
const routesUser = new Router();

routesUser.get("/",userController.createUser)

export default routesUser;