const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    Welcome to my Express App! <br>
    My name is Gowthami <br>
    age is 22 <br>
    

  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
