import { Router } from "express";
import UserContoller from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserContoller();

userRoutes.post("/", userController.create);
userRoutes.patch("/:id", userController.enable);
userRoutes.get("/:id", userController.indexById);
userRoutes.put("/:id", userController.update);

export default userRoutes;
