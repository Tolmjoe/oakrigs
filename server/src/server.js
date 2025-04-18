import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";

import {dbConnection} from "./db/connectDB.js"

 
const app = express();

app.use(express.json());
app.use(cookieparser());
dotenv.config();


dbConnection();



const PORT =process.env.PORT;
app.listen(PORT ,()=>{console.log(`app listening at port ${PORT}`)});

app.get("/" ,(req,res )=>{res.send("docker modified testok, ok route....")})
// localhost:1234/user/register
import {userRouter} from "./routes/user.route.js";
app.use("/user",userRouter);


