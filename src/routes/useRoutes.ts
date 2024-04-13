import { Router } from "express";
import userControllers from "controllers/userControllers";

export const userRouter = Router();

userRouter.post("/", userControllers.create);