import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import AddDefaultData from "./addDefaultData.js";
import Router from "./routes/route.js";
import path from 'path';

const __dirname =path.resolve();

const app = express();

dotenv.config();

app.use(cors());

/**As with new express , express automatically cannpt parse request.body so we need these */
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const userName = process.env.DB_USER_NAME;
const userPassword = process.env.DB_USER_PASSWORD;

Connection(userName, userPassword);

app.use(express.static(path.join(__dirname ,"./client/build")));
app.get('*',function(_,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
    res.status(500).send(err);
  })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running ");
});

AddDefaultData();
