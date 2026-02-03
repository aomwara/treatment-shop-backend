import Treatment from "../models/Treatment";

export const findTreatments = async (
  name: string | undefined,
  skip: number,
  limit: number
) => {
  const q = name
    ? { name: { $regex: name, $options: "i" } }
    : {};

  const [items, total] = await Promise.all([
    Treatment.find(q)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Treatment.countDocuments(q)
  ]);

  return { items, total };
};
