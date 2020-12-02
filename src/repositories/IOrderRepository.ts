import ICreateOrderDTO from "../dtos/ICreateOrderDTO";
import Order from "../models/Order";

export default interface IOrderRepository {
    findAll(): Promise<Order[]>;
    findAllPaginated(page: number): Promise<[Order[], number]>;
    findAllByName(name: string): Promise<Order[]>;
    findAById(id: string): Promise<Order | undefined>;
    findAByEmail(email: string): Promise<Order | undefined>;
    create(createSctockDTO: ICreateOrderDTO): Promise<Order>;
    save(order: Order): Promise<Order>;
    delete(id: string): Promise<void>;
}
