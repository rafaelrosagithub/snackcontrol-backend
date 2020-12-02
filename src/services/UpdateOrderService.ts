import AppError from "../errors/AppError";
import Order from "../models/Order";
import IOrderRepository from "../repositories/IOrderRepository";

interface IRequest {
    id: string;
    title: string;
    qtd: number;
    unid_medida: string;
    lote: string;
    escola: string;
    id_stock: number;
}

class UpdateOrderService {
    private orderRepository: IOrderRepository;

    constructor(orderRepository: IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    public async execute({
        id,
        title,
        qtd,
        unid_medida,
        lote,
        escola,
        id_stock
    }: IRequest): Promise<Order> {
        const order = await this.orderRepository.findAById(id);

        if (!order) {
            console.log("Order not found...");
            throw new AppError("Order not found!", 400);
        }

        /*console.log("email: " + email)
        if (email !== client.email) {
            console.log("update client email: " + email)
            const verifyEmail = this.clientRepository.findAByEmail(email);

            if (verifyEmail) {
                console.log("Email já usado...");
                throw new AppError("E-mail already used!", 400);
            }
        }*/

        order.title = title;
        order.qtd = qtd;
        order.unid_medida = unid_medida;
        order.lote = lote;
        order.escola = escola;
        order.id_stock = id_stock;

        await this.orderRepository.save(order);

        return order;
    }
}

export default UpdateOrderService;
