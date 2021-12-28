import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = process.env.PORT || 5000;

// app setup
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database setup

// API routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
