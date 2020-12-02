import { Router } from "express";
import SchollController from "../controllers/SchollController";

const schoolRoutes = Router();
const schollController = new SchollController();

schoolRoutes.get("/", schollController.index);
schoolRoutes.get("/search", schollController.search);
schoolRoutes.get("/:id", schollController.indexById);
schoolRoutes.put("/:id", schollController.update);

export default schoolRoutes;
