import mongoose from "mongoose";
import { string } from "zod";
import express from 'express'
const app = express();


mongoose
  .connect(
    "mongodb+srv://admin:6pgpEaU1FjIznX2o@cluster0.h9ftvjf.mongodb.net/business-card"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  interests: [{ type: String }], // An array of strings
  linkedin: { type: String, required: true },
  instagram: { type: String, required: true },
});

const Cards = mongoose.model("Cards", cardSchema);

export { Cards };

