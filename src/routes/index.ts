import { Router } from "express";
import { userRouter } from "./useRoutes";

const router = Router();

router.use(userRouter);


export default router;