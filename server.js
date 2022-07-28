require("dotenv").config();
const express = require("express");
const UserRoutes = require("./routes/UserRoutes");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", UserRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
