import { getRepository, Like, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import ICreateProviderDTO from "../dtos/ICreateProviderDTO";
import Client from "../models/Client";
import Provider from "../models/Provider";
import IClientsRepository from "./IClientsRepository";
import IProviderRepository from "./IProviderRepository";

class ProviderRepository implements IProviderRepository {
    private ormRepository: Repository<Provider>;

    constructor() {
        this.ormRepository = getRepository(Provider);
    }

    public async findAll(): Promise<Provider[]> {
        console.log("ProviderRepository findAll()");
        return this.ormRepository.find({
            order: {
                name: "ASC",
            },
        });
    }

    public async findAllPaginated(page: number): Promise<[Provider[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(name: string): Promise<Provider[]> {
        console.log("findAllBuyName...");
        return this.ormRepository.find({
            name: Like(`%${name}%`),
        });
    }

    public async findAById(id: string): Promise<Provider | undefined> {
        console.log("findById...");
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findAByEmail(email: string): Promise<Provider | undefined> {
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
    }: ICreateProviderDTO): Promise<Provider> {
        const provider = this.ormRepository.create({
            name,
            email,
            telephone,
            cnpj,
        });

        await this.ormRepository.save(provider);

        return provider;
    }

    public async save(provider: Provider): Promise<Provider> {
        return this.ormRepository.save(provider);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default ProviderRepository;
