import {Router} from "express";
import routesUser from "./userRoute.js";
const routes = new Router();

routes.use(routesUser);

export default routes;