import Express  from "express";
import { main, getLogin, postLogin,join } from "../controller/loginController";

const userRouter = Express.Router();

userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.get("/main", main);
userRouter.get("/join", join);


export default userRouter;