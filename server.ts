import express, {Express, Request, Response} from "express";

const app: Express = express();

// Adding middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Adding routes
app.use("/", require("./Routes/index"));

app.listen(3000, () => {
    console.log("http://localhost:3000");
});