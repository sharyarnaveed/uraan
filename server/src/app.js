import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import userrouter from "./routes/user.routes.js";
import adminrouter from "./routes/admin.routes.js"
const app=express();

app.use(
    cors({
        origin: true,
        credentials:true
    })
)

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ limit: "100kb", extended: true }));
app.use(cookieParser());


app.use("/api/user",userrouter)
app.use("/api/admin",adminrouter)

export {app}