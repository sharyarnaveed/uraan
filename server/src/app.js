import express from "express";
import cors from "cors";
import userrouter from "./routes/user.routes.js";

const app=express();

app.use(
    cors({
        origin: true,
        credentials:true
    })
)



app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ limit: "100kb", extended: true }));


app.use("/api/user",userrouter)


export {app}