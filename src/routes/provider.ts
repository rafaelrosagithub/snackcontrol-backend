import { Router } from "express";
import ProviderController from "../controllers/ProviderController";

const providerRoutes = Router();
const providerController = new ProviderController();

providerRoutes.get("/", providerController.index);
providerRoutes.get("/search", providerController.search);
providerRoutes.get("/:id", providerController.indexById);
providerRoutes.put("/:id", providerController.update);

export default providerRoutes;
