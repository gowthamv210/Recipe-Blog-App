const express = require("express");
const app = express();

const routes = require("./routes/recipeRoutes");
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", routes);

app.listen(port, () => console.log(`Listening to port ${port}`));
