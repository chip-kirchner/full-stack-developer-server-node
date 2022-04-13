import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

mongoose.connect("mongodb+srv://webdevcourse:46s7ankM9wUmraVY@cluster0.zmo0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(4000);