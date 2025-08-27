const express = require("express");
const app = express();

function addUser(req, res, next) {
  req.user = "Guest"; 
  next();
}

app.get("/welcome", addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(3009, () => console.log("Server running on port 3009"));



