import { getRepository, Like, Repository } from "typeorm";
import ICreateBiddingDTO from "../dtos/ICreateBiddingDTO";
import Bidding from "../models/Bidding";
import IBiddingRepository from "./IBiddingRepository";

class BiddingRepository implements IBiddingRepository {
    private ormRepository: Repository<Bidding>;

    constructor() {
        this.ormRepository = getRepository(Bidding);
    }

    public async findAll(): Promise<Bidding[]> {
        console.log("Bidding Repository findAll()");
        return this.ormRepository.find({
            order: {
                title: "ASC",
            },
        });
    }

    public async findAllPaginated(page: number): Promise<[Bidding[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(title: string): Promise<Bidding[]> {
        console.log("findAllBuyName...");
        return this.ormRepository.find({
            title: Like(`%${title}%`),
        });
    }

    public async findAById(id: string): Promise<Bidding | undefined> {
        console.log("findById...");
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findAByEmail(email: string): Promise<Bidding | undefined> {
        return this.ormRepository.findOne({
            where: { email },
        });
    }

    public async create({
        title,
        qtd,
        unid_medida,
        provider,
        user_creation,
        email
    }: ICreateBiddingDTO): Promise<Bidding> {
        const bidding = this.ormRepository.create({
            title,
            qtd,
            unid_medida,
            provider,
            user_creation,
            email
        });

        await this.ormRepository.save(bidding);

        return bidding;
    }

    public async save(bidding: Bidding): Promise<Bidding> {
        return this.ormRepository.save(bidding);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default BiddingRepository;
