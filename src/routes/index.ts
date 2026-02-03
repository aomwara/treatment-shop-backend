
import { Router } from "express";
import treatmentRoutes from "./treatmentRoutes";

const apiRouter = Router();

apiRouter.use("/treatments", treatmentRoutes);

export default apiRouter;
