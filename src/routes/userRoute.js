import {Router} from "express";
import { userController } from "../app/controllers/userController.js";
const routesUser =  Router();

routesUser.post("/",userController.createUser);


export default routesUser;