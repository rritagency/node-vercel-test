const express = require("express");
const router = express.Router();
// const pool = require("../db");

// Root route
router.get("/", async (req, res) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

// /todos route
router.get("/todos", async (req, res) => {
  return res.status(200).json([
    { id: 1, task: "Do the laundry", completed: false },
    { id: 2, task: "Clean the house", completed: true },
    { id: 3, task: "Buy groceries", completed: false },
  ]);
});

module.exports = router;
