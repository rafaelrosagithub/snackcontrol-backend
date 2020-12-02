import AppError from "../errors/AppError";
import Sotck from "../models/Stock";
import IStockRepository from "../repositories/IStockRepository";

interface IRequest {
    title: string;
    qtd: number;
    unid_medida: string;
    lote: string;
}

class CreateStockService {
    private stockRepository: IStockRepository;

    constructor(stockRepository: IStockRepository) {
        this.stockRepository = stockRepository;
    }

    public async execute({
        title,
        qtd,
        unid_medida,
        lote,
    }: IRequest): Promise<Sotck> {
        //const verifyClient = await this.stockRepository.findAByEmail(email);

        //if (verifyClient) {
        //throw new AppError("Stock already exists!", 400);
        //}

        const stock = await this.stockRepository.create({
            title,
            qtd,
            unid_medida,
            lote,
        });

        return stock;
    }
}

export default CreateStockService;
