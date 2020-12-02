import { Router } from "express";
import BiddingController from "../controllers/BiddingController";

const biddingRoutes = Router();
const biddingController = new BiddingController();

biddingRoutes.get("/", biddingController.index);
biddingRoutes.get("/search", biddingController.search);
biddingRoutes.get("/:id", biddingController.indexById);
biddingRoutes.post("/", biddingController.create);

export default biddingRoutes;