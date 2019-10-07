const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index");
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, "dist/")));

app.get("/test", function(req, res) {
  res.send("Testing working fine");
});

// Send all other requests to the Angular app
app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "index.html"));
});

indexRouter.appRoute(app);

//Set Port
const port = process.env.PORT || "3000";
app.set("port", port);

app.listen(port, function() {
  console.log("Server now listening on", port);
});
