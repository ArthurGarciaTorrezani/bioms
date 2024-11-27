import express, { json, urlencoded } from "express";
import routes from "./routes/router.js";


const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);

app.get("/",(req,res)=>{
     
})

export default app;