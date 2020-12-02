import ICreateBinddingDTO from "../dtos/ICreateBiddingDTO";
import Bidding from "../models/Bidding";

export default interface IBiddingRepository {
    findAll(): Promise<Bidding[]>;
    findAllPaginated(page: number): Promise<[Bidding[], number]>;
    findAllByName(name: string): Promise<Bidding[]>;
    findAById(id: string): Promise<Bidding | undefined>;
    findAByEmail(email: string): Promise<Bidding | undefined>;
    create(createClientDTO: ICreateBinddingDTO): Promise<Bidding>;
    save(bidding: Bidding): Promise<Bidding>;
    delete(id: string): Promise<void>;
}
