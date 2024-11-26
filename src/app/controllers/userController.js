import { coisasAsefazer } from "../services/userService.js"
async function createUser(req,res){
     console.log("oi") 
     const a = await coisasAsefazer.createUser()
     console.log(a)
    res.send(a)
}

export const userController = {
     createUser
}