const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Click here to launch http://localhost:${port}`);
});
