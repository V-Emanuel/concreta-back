import { Router } from "express";
import { userRouter } from "./userRoutes";
import { registerRouter } from "./registerRoutes";

const router = Router();

router.use("/users",userRouter);
router.use("/register", registerRouter);

export default router;