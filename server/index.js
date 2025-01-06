import connect from "./src/database/conn.database.js";

import { app } from "./src/app.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
  })



connect()
.then(()=>{
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch((error)=>
{
    console.log("error in db",error);
})