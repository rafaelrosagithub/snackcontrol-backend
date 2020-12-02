import { Router } from "express";
import StockController from "../controllers/StockController";

const stockRoutes = Router();
const stockController = new StockController();

stockRoutes.get("/", stockController.index);
stockRoutes.get("/search", stockController.search);
stockRoutes.get("/:id", stockController.indexById);
stockRoutes.post("/", stockController.create);
stockRoutes.put("/:id", stockController.update);


export default stockRoutes;
