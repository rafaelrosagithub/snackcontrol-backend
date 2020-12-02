import AppError from "../errors/AppError";
import Order from "../models/Order";
import IOrderRepository from "../repositories/IOrderRepository";

interface IRequest {
    title: string;
    qtd: number;
    unid_medida: string;
    lote: string;
    escola: string;
    id_stock: number;
}

class CreateOrderService {
    private orderRepository: IOrderRepository;

    constructor(orderRepository: IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    public async execute({
        title,
        qtd,
        unid_medida,
        lote,
        escola,
        id_stock
    }: IRequest): Promise<Order> {
        //const verifyClient = await this.stockRepository.findAByEmail(email);

        //if (verifyClient) {
        //throw new AppError("Stock already exists!", 400);
        //}
        console.log("CreateOrderService execute()")
        const order = await this.orderRepository.create({
            title,
            qtd,
            unid_medida,
            lote,
            escola,
            id_stock
        });

        return order;
    }
}

export default CreateOrderService;
