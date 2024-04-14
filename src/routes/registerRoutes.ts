import { Router } from "express";
import registerControllers from "controllers/registerControllers";

export const registerRouter = Router();

registerRouter.post("/", registerControllers.create);