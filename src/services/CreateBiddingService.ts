import AppError from "../errors/AppError";
import Bidding from "../models/Bidding";
import IBiddingRepository from "../repositories/IBiddingRepository";

interface IRequest {
    id: number;
    title: string;
    qtd: number;
    unid_medida: string;
    provider: string;
    user_creation: string;
    email: string;
}

class CreateBiddingService {
    private biddingRepository: IBiddingRepository;

    constructor(biddingRepository: IBiddingRepository) {
        this.biddingRepository = biddingRepository;
    }

    public async execute({
        id,
        title,
        qtd ,
        unid_medida,
        provider,
        user_creation,
        email
    }: IRequest): Promise<Bidding> {
       /* const verifyClient = await this.clientRepository.findAByEmail(email);

        if (verifyClient) {
            throw new AppError("Client already exists!", 400);
        }*/

        const bidding = await this.biddingRepository.create({
            id,
            title,
            qtd ,
            unid_medida,
            provider,
            user_creation,
            email
        });

        return bidding;
    }
}

export default CreateBiddingService;
