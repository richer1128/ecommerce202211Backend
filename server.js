import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(productsData.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {

});
