import express from "express";
import products from "./products.js";

const app = express();
// const express = require("express");
// const cors = require("cors");
import cors from "cors";

app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
