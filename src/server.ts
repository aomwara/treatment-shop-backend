import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import { env } from "./config/env";

const start = async () => {
  await mongoose.connect(env.MONGO_URI);
  console.log("Mongo connected");

  app.listen(env.PORT, () => {
    console.log(`Server running on ${env.PORT}`);
  });
}

start().catch(err => {
  console.error(err);
  process.exit(1);
});
