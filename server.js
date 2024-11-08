const express = require("express");
const app = express();

const routes = require("./server/routes/recipeRoutes");
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//const expressLayout = require("express-ejs-layouts");
//app.use(expressLayout);
//app.set("layout", "./layouts/main");

app.use(routes);

app.listen(port, () => console.log(`Listening to port ${port}`));
