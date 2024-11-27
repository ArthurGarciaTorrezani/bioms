import {Router} from "express";
import routesUser from "./userRoute.js";
const routes = Router();

routes.use(routesUser);

export default routes;