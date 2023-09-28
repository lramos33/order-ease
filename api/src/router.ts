import multer from "multer";
import path from "node:path";
import { Router } from "express";

import { createCategory } from "./useCases/categories/createCategory";
import { listCategories } from "./useCases/categories/listCategories";
import { deleteCategory } from "./useCases/categories/deleteCategory";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategories";

import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";
import { deleteProduct } from "./useCases/products/deleteProduct";

import { editOrder } from "./useCases/orders/editOrder";
import { listOrders } from "./useCases/orders/listOrders";
import { createOrder } from "./useCases/orders/createOrder";
import { deleteOrder } from "./useCases/orders/deleteOrder";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(_req, _file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Categories
router.get("/categories", listCategories);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/categories/:id/products", listProductsByCategory);

// Products
router.get("/products", listProducts);
router.delete("/products/:id", deleteProduct);
router.post("/products", upload.single("image"), createProduct);

// Orders
router.get("/orders", listOrders);
router.post("/orders", createOrder);
router.patch("/orders/:id", editOrder);
router.delete("/orders/:id", deleteOrder);
