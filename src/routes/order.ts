import { Router } from "express";
import OrderController from "../controllers/OrderController";

const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.get("/", orderController.index);
orderRoutes.get("/search", orderController.search);
orderRoutes.get("/:id", orderController.indexById);
orderRoutes.post("/", orderController.create);
orderRoutes.put("/:id", orderController.update);

export default orderRoutes;