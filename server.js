import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

const productsPath = path.join(process.cwd(), "products.json");
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

app.get("/products", (req, res) => {
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit) || 10, 1);

  const start = (page - 1) * limit;
  const end = start + limit;

  res.json({
    page,
    limit,
    totalItems: products.length,
    totalPages: Math.ceil(products.length / limit),
    items: products.slice(start, end)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
