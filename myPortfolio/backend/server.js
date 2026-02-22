require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/aiRoute");
const port = 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/ai", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost/${port}`);
});
