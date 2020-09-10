const express = require("express");
const app = express();

app.use(express.static("./dist/google-gtm-analytics"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/google-gtm-analytics" });
});

app.listen(process.env.PORT || 8080);
