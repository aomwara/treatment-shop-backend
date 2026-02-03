import { Router } from "express";
import { getTreatments, getTreatmentById } from "../controllers/treatmentController";

const router = Router();

router.get("/", getTreatments);
router.get("/:id", getTreatmentById);

export default router;

