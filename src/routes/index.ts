import { Router } from "express";
import stockRoutes from "./stock";
import userRoutes from "./user";
import sessionRoutes from "./session";
import clientRoutes from "./client";
import schoolkRoutes from "./school";
import providertRoutes from "./provider";
import productRoutes from "./product";
import biddingtRoutes from "./bidding";
import orderRoutes from "./order";
import { finishedProduct, finishedProvider, getTask, getTasks, saveTask, updateTask } from "../controllers/TasksController";

const routes = Router();
//const prefixRoutes = "/api/v1";

routes.get("/", (request, response) => {
    return response.json({ message: "Teste api controle merenda..." });
});
routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.use(`/users`, userRoutes);
routes.use(`/sessions`, sessionRoutes);
routes.use(`/clients`, clientRoutes);
routes.use(`/providers`, providertRoutes);
routes.use(`/school`, schoolkRoutes);
routes.use(`/stock`, stockRoutes);
routes.use(`/order`, orderRoutes);
routes.use(`/product`, productRoutes);
routes.use(`/bidding`, biddingtRoutes);
routes.use(`/product/:id`, finishedProduct);
routes.patch('/providers/:id', finishedProvider);
routes.patch('/clients/:id', finishedProvider);

export default routes;
