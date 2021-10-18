import express  from "express";
import morgan from "morgan";
import userRouter from "./router/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/views");
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use("/", userRouter);

export default app;