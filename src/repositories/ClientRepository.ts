import { getRepository, Like, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../models/Client";
import IClientsRepository from "./IClientsRepository";

class ClientRepository implements IClientsRepository {
    private ormRepository: Repository<Client>;

    constructor() {
        this.ormRepository = getRepository(Client);
    }

    public async findAll(): Promise<Client[]> {
        console.log("findAll...");
        return this.ormRepository.find();
    }

    public async findAllPaginated(page: number): Promise<[Client[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(name: string): Promise<Client[]> {
        console.log("findAllBuyName...")
        return this.ormRepository.find({
            name: Like(`%${name}%`),
        });
    }

    public async findAById(id: string): Promise<Client | undefined> {
        console.log("findById...")
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findAByEmail(email: string): Promise<Client | undefined> {
        return this.ormRepository.findOne({
            where: { email },
        });
    }

    public async create({
        name,
        email,
        telephone,
        cnpj,
        user_uuid,
    }: ICreateClientDTO): Promise<Client> {
        const client = this.ormRepository.create({
            name,
            email,
            telephone,
            cnpj,
            user_uuid,
        });

        await this.ormRepository.save(client);

        return client;
    }

    public async save(client: Client): Promise<Client> {
        return this.ormRepository.save(client);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default ClientRepository;
