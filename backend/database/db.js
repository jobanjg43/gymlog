import pg from "pg"
import dotenv from "dotenv"

let isDBConnected = false;
dotenv.config()

const db = new pg.Client({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT
})


//Promise for Database connection
const Database_Connect = new Promise ((res, rej)=>{
        console.log("Waiting for Db connection!")

        db.connect((err)=>{
            if (err)
            {
            console.log(err)
            isDBConnected = false
            rej()
            
            }
            else{
            console.log("DB Connected!");
            isDBConnected = true;
            res()
            
            }
        })
    })





export default db;
export {isDBConnected , Database_Connect}

