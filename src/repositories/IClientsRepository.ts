import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../models/Client";

export default interface IClientsRepository {
    findAll(): Promise<Client[]>;
    findAllPaginated(page: number): Promise<[Client[], number]>;
    findAllByName(name: string): Promise<Client[]>;
    findAById(id: string): Promise<Client | undefined>;
    findAByEmail(email: string): Promise<Client | undefined>;
    create(createClientDTO: ICreateClientDTO): Promise<Client>;
    save(client: Client): Promise<Client>;
    delete(id: string): Promise<void>;
}
