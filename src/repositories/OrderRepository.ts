import { getRepository, Like, Repository } from "typeorm";
import ICreateOrderDTO from "../dtos/ICreateOrderDTO";
import Order from "../models/Order";
import IOrderRepository from "./IOrderRepository";

class OrderRepository implements IOrderRepository {
    private ormRepository: Repository<Order>;

    constructor() {
        this.ormRepository = getRepository(Order);
    }

    public async findAll(): Promise<Order[]> {
        console.log("findAll...");
        return this.ormRepository.find();
    }

    public async findAllPaginated(page: number): Promise<[Order[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(title: string): Promise<Order[]> {
        console.log("findAllBuyName...");
        return this.ormRepository.find({
            title: Like(`%${title}%`),
        });
    }

    public async findAById(id: string): Promise<Order | undefined> {
        console.log("findById...");
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findAByEmail(email: string): Promise<Order | undefined> {
        return this.ormRepository.findOne({
            where: { email },
        });
    }

    public async create({
        title,
        qtd,
        unid_medida,
        lote,
        escola,
        id_stock
    }: ICreateOrderDTO): Promise<Order> {
        const order = this.ormRepository.create({
            title,
            qtd,
            unid_medida,
            lote,
            escola,
            id_stock
        });

        await this.ormRepository.save(order);

        return order;
    }

    public async save(order: Order): Promise<Order> {
        return this.ormRepository.save(order);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default OrderRepository;
