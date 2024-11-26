import express, { json, urlencoded } from "express";
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/",(req,res)=>{
     let a = req.body
     console.log(a)
     res.send(a)
})

app.listen(8080,()=>{
     console.log("oi")
})