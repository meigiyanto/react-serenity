import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

import db from './config/db.js';
import SequelizeStore from "connect-session-sequelize";

import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

// import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
// app.use(cookieParser());

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Connected!");
});
