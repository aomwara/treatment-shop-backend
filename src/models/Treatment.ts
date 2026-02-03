import { Schema, model } from "mongoose";

const treatmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  price: Number,
  image: String
}, { timestamps: true });

export default model("Treatment", treatmentSchema);

