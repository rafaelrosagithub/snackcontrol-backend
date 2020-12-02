import StockRepository from "../repositories/StockRepository";
import { Request, Response } from "express";
import CreateStockService from "../services/CreateStockService";
import UpdateStockService from "../services/UpdateStockService";

class StockController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("StockController index()")
        const stockRepository = new StockRepository();

        const stocks = await stockRepository.findAll();

        return response.json(stocks);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("indexById");
        const { id } = request.params;
        console.log("indexById: " + id);
        const stockRepository = new StockRepository();
        const stock = await stockRepository.findAById(id);
        return response.json(stock);
    }

    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("StockController search()")
        const { title } = request.query;
        const stockRepository = new StockRepository();

        const stocks = await stockRepository.findAllByName(
            title?.toString() || ""
        );

        return response.json(stocks);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("StockController create()")
        const { title, qtd, unid_medida, lote } = request.body;
        const stockRepository = new StockRepository();
        const createStock = new CreateStockService(stockRepository);

        const stock = await createStock.execute({
            title,
            qtd,
            unid_medida,
            lote,
        });

        return response.status(201).json(stock);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("StockController update()")
        const { id } = request.params;
        const { title, qtd, unid_medida, lote } = request.body;
        const stockRepository = new StockRepository();
        const updateStock = new UpdateStockService(stockRepository);

        const stock = await updateStock.execute({
            id,
            title,
            qtd,
            unid_medida,
            lote,
        });
        console.log("update cliente...");
        return response.json(stock);
    }



}

export default StockController;
