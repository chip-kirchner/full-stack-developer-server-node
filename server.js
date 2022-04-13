import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev';

console.log("Connecting to " + CONNECTION_STRING);

mongoose.connect(CONNECTION_STRING);

console.log("Connected");

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);