import AppError from "../errors/AppError";
import Stock from "../models/Stock";
import IStockRepository from "../repositories/IStockRepository";

interface IRequest {
    id: string;
    title: string;
    qtd: number;
    unid_medida: string;
    lote: string;
}

class UpdateStockService {
    private stockRepository: IStockRepository;

    constructor(stockRepository: IStockRepository) {
        this.stockRepository = stockRepository;
    }

    public async execute({
        id,
        title,
        qtd,
        unid_medida,
        lote,
    }: IRequest): Promise<Stock> {
        const stock = await this.stockRepository.findAById(id);

        if (!stock) {
            console.log("Order not found...");
            throw new AppError("Order not found!", 400);
        }

        stock.title = title;
        stock.qtd = qtd;
        stock.unid_medida = unid_medida;
        stock.lote = lote;

        await this.stockRepository.save(stock);

        return stock;
    }
}

export default UpdateStockService;
