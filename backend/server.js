import express from "express"
import router from "./routes/api.js";
import db , {isDBConnected, Database_Connect}from "./database/db.js"
import dotenv from "dotenv"


const server = express();
dotenv.config();

server.listen(process.env.SERVER_PORT , (err)=>{
    if(err)
    {
        console.log(err)

    }

    else{
        console.log(`Server listening on port ${process.env.SERVER_PORT}`);
    }
})

server.use("/api", router)



