import { Router } from "express";
import clientControllers from "controllers/clientControllers";

export const clientRouter = Router();

clientRouter.post("/", clientControllers.create);