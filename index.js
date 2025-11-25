const express = require("express");
const app = express();

// First route
app.get("/", (req, res) => {
res.send("Hello Express! Your first server is running 🚀");
});
// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
