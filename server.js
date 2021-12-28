import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cards from "./models/dbCards.js";

const PORT = process.env.PORT || 5000;
// app setup
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connection to database 
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error connecting",err));

// API routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// post data to database
app.post("/api/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard);
  cards.create(dbCard, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// get data from database
app.get("/api/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listen
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
