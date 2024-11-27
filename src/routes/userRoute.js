import {Router} from "express";
import { userController } from "../app/controllers/userController.js";
const routesUser =  Router();

routesUser.get("/",userController.createUser);


export default routesUser;