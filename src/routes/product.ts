import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.get("/", productController.index);
productRoutes.get("/search", productController.search);
productRoutes.get("/:id", productController.indexById);
productRoutes.post("/", productController.create);
productRoutes.put("/:id", productController.update);

export default productRoutes;
