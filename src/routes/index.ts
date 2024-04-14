import { Router } from "express";
import { userRouter } from "./userRoutes";
import { registerRouter } from "./registerRoutes";
import { clientRouter } from "./clientRoutes";

const router = Router();

router.use("/users", userRouter);
router.use("/register", registerRouter);
router.use("/client", clientRouter);

export default router;