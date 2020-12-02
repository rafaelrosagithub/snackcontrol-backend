import ICreateStockDTO from "../dtos/ICreateStockDTO";
import Stock from "../models/Stock";

export default interface ISchoolsRepository {
    findAll(): Promise<Stock[]>;
    findAllPaginated(page: number): Promise<[Stock[], number]>;
    findAllByName(name: string): Promise<Stock[]>;
    findAById(id: string): Promise<Stock | undefined>;
    findAByEmail(email: string): Promise<Stock | undefined>;
    create(createSctockDTO: ICreateStockDTO): Promise<Stock>;
    save(stock: Stock): Promise<Stock>;
    delete(id: string): Promise<void>;
}
