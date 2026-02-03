import { findTreatments } from "../repositories/treatmentRepo";

export const listTreatments = async (
  name: string | undefined,
  page: number,
  limit: number
) => {
  const skip = (page - 1) * limit;

  const { items, total } = await findTreatments(name, skip, limit);

  return {
    items,
    page,
    limit,
    total,
    hasMore: skip + items.length < total
  };
};
