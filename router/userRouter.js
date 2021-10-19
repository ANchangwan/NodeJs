import Express  from "express";
import { main, getLogin, postLogin, getJoin, postJoin } from "../controller/loginController";

const userRouter = Express.Router();

userRouter.get("/main", main);
userRouter.route("/join").get(getJoin).post(postJoin);
userRouter.route("/login").get(getLogin).post(postLogin);


export default userRouter;