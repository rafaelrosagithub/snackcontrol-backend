import OrderRepository from "../repositories/OrderRepository";
import { Request, Response } from "express";
import CreateOrderService from "../services/CreateOrderService";
import UpdateOrderService from "../services/UpdateOrderService";

class OrderController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        const orderRepository = new OrderRepository();

        const orders = await orderRepository.findAll();

        return response.json(orders);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("indexById");
        const { id } = request.params;
        console.log("indexById: " + id);
        const orderRepository = new OrderRepository();
        const order = await orderRepository.findAById(id);
        return response.json(order);
    }

    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { title } = request.query;
        const orderRepository = new OrderRepository();

        const orders = await orderRepository.findAllByName(
            title?.toString() || ""
        );

        return response.json(orders);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("OrderController create()")
        const { title, qtd, unid_medida, lote, escola, id_stock } = request.body;
        const orderRepository = new OrderRepository();
        const createOrder = new CreateOrderService(orderRepository);

        const order = await createOrder.execute({
            title,
            qtd,
            unid_medida,
            lote,
            escola,
            id_stock
        });

        return response.status(201).json(order);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("orderController update()")
        const { id } = request.params;
        const { title, qtd, unid_medida, lote, escola, id_stock } = request.body;
        const orderRepository = new OrderRepository();
        const updateOrder = new UpdateOrderService(orderRepository);

        const order = await updateOrder.execute({
            id,
            title,
            qtd,
            unid_medida,
            lote,
            escola,
            id_stock
        });
        console.log("update order...");
        return response.json(order);
    }
}

export default OrderController;
