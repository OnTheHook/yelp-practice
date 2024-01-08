require("dotenv").config();

const express = require("express");

const app = express();

app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Get individual restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req);
});
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
