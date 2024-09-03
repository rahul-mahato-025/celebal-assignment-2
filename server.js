const express = require("express");

const app = express();

const productData = [
  {
    id: 0,
    name: "Iphone 11",
  },
  {
    id: 1,
    name: "Iphone 12",
  },
];

// Middleware for parsing
app.use(express.json());

// GET All Products
app.get("/products", function (req, res) {
  return res.status(200).json({
    data: productData,
    message: "Fetched products data",
    success: true,
    error: {},
  });
});

// POST a new Product
app.post("/products", function (req, res) {
  const newProduct = { id: productData.length, name: req.body.name };
  productData.push(newProduct);
  return res.status(201).json({
    data: newProduct,
    message: "Created a new product",
    success: true,
    error: {},
  });
});

app.listen(3001, () => console.log("Server started on port 3000"));
