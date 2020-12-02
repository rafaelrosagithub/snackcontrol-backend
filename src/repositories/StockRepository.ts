import { getRepository, Like, Repository } from "typeorm";
import ICreateStockDTO from "../dtos/ICreateStockDTO";
import Stock from "../models/Stock";
import IStockRepository from "./IStockRepository";

class StockRepository implements IStockRepository {
    private ormRepository: Repository<Stock>;

    constructor() {
        this.ormRepository = getRepository(Stock);
    }

    findAllPaginated(page: number): Promise<[Stock[], number]> {
        throw new Error("Method not implemented.");
    }

    public async findAById(id: string): Promise<Stock | undefined> {
        console.log("findById...");
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    findAByEmail(email: string): Promise<Stock | undefined> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async findAll(): Promise<Stock[]> {
        console.log("StockRepository findAll()");
        return this.ormRepository.find({
            order: {
                title: "ASC",
            },
        });
    }

    public async findAllByName(title: string): Promise<Stock[]> {
        console.log("StockRepository findAllBuyName()");
        return this.ormRepository.find({
            title: Like(`%${title}%`),
        });
    }

    public async create({
        title,
        qtd,
        unid_medida,
        lote,
    }: ICreateStockDTO): Promise<Stock> {
        const stock = this.ormRepository.create({
            title,
            qtd,
            unid_medida,
            lote,
        });

        await this.ormRepository.save(stock);

        return stock;
    }

    public async save(stock: Stock): Promise<Stock> {
        return this.ormRepository.save(stock);
    }
}

export default StockRepository;
