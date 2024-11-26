import prisma from "../../config/dataBaseConection.js"

async function createUser(){
     const user = await prisma.user.create({
          data:{
               email:"ta@gmail.com",
               name:"ta",
               idade:22
          }
     })

     return user
}

export const coisasAsefazer = {
     createUser
}