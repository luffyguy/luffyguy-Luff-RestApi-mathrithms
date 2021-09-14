const express = require("express");
const app = express();
const routes = require("./Router/router");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.listen(5001, function (err) {
  if (err) console.log("404" + err);
  console.log("Server listening on PORT", 5001);
});

app.use("/", routes);

app.use((req, res) => {
  res.send("404");
});
