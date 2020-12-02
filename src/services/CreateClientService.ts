import { PrimaryGeneratedColumnUUIDOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnUUIDOptions";
import AppError from "../errors/AppError";
import Client from "../models/Client";
import IClientsRepository from "../repositories/IClientsRepository";

interface IRequest {
    name: string;
    email: string;
    telephone: string;
    cnpj: string;
    user_uuid: string;
}

class CreateClientService {
    private clientRepository: IClientsRepository;

    constructor(clientRepository: IClientsRepository) {
        this.clientRepository = clientRepository;
    }

    public async execute({
        name,
        email,
        telephone,
        cnpj,
        user_uuid,
    }: IRequest): Promise<Client> {
        const verifyClient = await this.clientRepository.findAByEmail(email);

        if (verifyClient) {
            throw new AppError("Client already exists!", 400);
        }

        const client = await this.clientRepository.create({
            name,
            email,
            telephone,
            cnpj,
            user_uuid,
        });

        return client;
    }
}

export default CreateClientService;
