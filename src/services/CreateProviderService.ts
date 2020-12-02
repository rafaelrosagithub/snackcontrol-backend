import { PrimaryGeneratedColumnUUIDOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnUUIDOptions";
import AppError from "../errors/AppError";
import Client from "../models/Client";
import Provider from "../models/Provider";
import IClientsRepository from "../repositories/IClientsRepository";
import IProviderRepository from "../repositories/IProviderRepository";

interface IRequest {
    name: string;
    email: string;
    telephone: string;
    cnpj: string;
    user_uuid: string;
}

class CreateProviderService {
    private providerRepository: IProviderRepository;

    constructor(providerRepository: IProviderRepository) {
        this.providerRepository = providerRepository;
    }

    public async execute({
        name,
        email,
        telephone,
        cnpj,
        user_uuid,
    }: IRequest): Promise<Provider> {
        const verifyClient = await this.providerRepository.findAByEmail(email);

        if (verifyClient) {
            throw new AppError("Client already exists!", 400);
        }

        const client = await this.providerRepository.create({
            name,
            email,
            telephone,
            cnpj,
            user_uuid,
        });

        return client;
    }
}

export default CreateProviderService;
