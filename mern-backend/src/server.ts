import UsersRouter from "./routes/users.router";
import ExercisesRouter from "./routes/exercises.router";
import mongoose from "mongoose";
import {Router} from "express";
import authorsRouterInstance from "./routes/authors.router";
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const router: Router = express.Router();
router.get('/baaaa', () => {
});

const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
UsersRouter.init(app);

new ExercisesRouter().init(app);
authorsRouterInstance.init(app);

require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri ? uri : 'mongodb was not set!',{
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        .then((myResult) => console.log(`successfully connected to ${uri}`))
        .catch(err => console.log(`error: `, err));

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})

console.log('hello');
