import BiddingRepository from "../repositories/BiddingRepository";
import { Request, Response } from "express";
import CreateBiddingService from "../services/CreateBiddingService";
//import UpdateBiddingService from "../services/UpdateBiddingService";

class BiddingController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("BiddingController index()")
        const biddingRepository = new BiddingRepository();

        const biddings = await biddingRepository.findAll();

        return response.json(biddings);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("indexById");
        const { id } = request.params;
        console.log("indexById: " + id);
        const biddingRepository = new BiddingRepository();
        const biddings = await biddingRepository.findAById(id);
        return response.json(biddings);
    }


    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("BiddingController serach()")
        const { title } = request.query;
        const biddingRepository = new BiddingRepository();

        const biddings = await biddingRepository.findAllByName(
            title?.toString() || ""
        );

        return response.json(biddings);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("BiddingController create()")
        const { id, title, qtd, unid_medida, provider, user_creation, email } = request.body;
        const biddingRepository = new BiddingRepository();
        const createBidding = new CreateBiddingService(biddingRepository);

        const bidding = await createBidding.execute({
            id,
            title,
            qtd,
            unid_medida,
            provider,
            user_creation,
            email
        });

        return response.status(201).json(bidding);
    }

   /* public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProductController update()")
        const { id } = request.params;
        const { title, product_category } = request.body;
        const biddingRepository = new BiddingRepository();
        const updateProduct = new UpdateBiddingService(biddingRepository);

        const bidding = await updateProduct.execute({
            id,
            title,
            product_category
        });
        console.log("update product...");
        return response.json(bidding);
    }*/
}

export default BiddingController;
