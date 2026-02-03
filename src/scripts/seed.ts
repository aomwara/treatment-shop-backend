import mongoose from "mongoose";
import dotenv from "dotenv";
import Treatment from "../models/Treatment";

dotenv.config();

const names = [
  "Deep Clean Facial",
  "Acne Treatment",
  "Hydrating Facial",
  "Brightening Glow Therapy",
  "Anti-Aging Facial",
  "Laser Rejuvenation",
  "Skin Detox Program",
  "Vitamin C Infusion",
  "Collagen Booster",
  "Gold Facial Therapy",
  "Microdermabrasion",
  "Chemical Peel",
  "Oxygen Facial",
  "Whitening Treatment",
  "Pore Tightening Care",
  "Eye Revive Therapy",
  "Dark Spot Corrector",
  "Scar Reduction",
  "Sensitive Skin Care",
  "Skin Barrier Repair",
  "Aroma Oil Massage",
  "Hot Stone Massage",
  "Deep Tissue Massage",
  "Relaxing Body Massage",
  "Slimming Body Wrap",
  "Cellulite Reduction",
  "Body Detox Therapy",
  "Head Spa Treatment",
  "Hair Growth Therapy",
  "Scalp Detox",
  "Keratin Hair Repair",
  "Laser Hair Removal",
  "IPL Skin Reset",
  "RF Lifting",
  "HIFU Lift",
  "Botanical Facial",
  "Herbal Compress Therapy",
  "Thai Herbal Massage",
  "Signature Glow Package",
  "Premium Skin Renewal",
  "Express Facial",
  "Quick Acne Care",
  "Weekend Glow Program",
  "Luxury Spa Package",
  "Diamond Peel",
  "Platinum Facial",
  "Nano Mist Therapy",
  "Hydra Facial",
  "Cooling Skin Therapy",
  "Ultimate Rejuvenation"
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  const data = names.map((name, i) => ({
    name,
    price: 500 + i * 25,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  }));

  await Treatment.insertMany(data);

  console.log("Seed done");
  process.exit();
};

seed();
