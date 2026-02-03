import { Request, Response } from "express";
import { listTreatments } from "../services/treatmentService";

export const getTreatments = async (
  req: Request,
  res: Response
) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Number(req.query.limit) || 10, 50);
    const name = req.query.name as string | undefined;

    const data = await listTreatments(name, page, limit);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch treatments" });
  }
};

export const getTreatmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Treatment by id",
    id,
  });
};
