const express = require("express");
const app = express();

// Basic route
app.get("/", (req, res) => {
res.send("Welcome Gowthami! You are learning Express! 🎉");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
