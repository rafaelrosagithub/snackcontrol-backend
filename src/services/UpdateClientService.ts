import AppError from "../errors/AppError";
import Client from "../models/Client";
import IClientsRepository from "../repositories/IClientsRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    telephone: string;
    cnpj: string;
}

class UpdateClientService {
    private clientRepository: IClientsRepository;

    constructor(clientRepository: IClientsRepository) {
        this.clientRepository = clientRepository;
    }

    public async execute({
        id,
        name,
        email,
        telephone,
        cnpj,
    }: IRequest): Promise<Client> {
        const client = await this.clientRepository.findAById(id);

        if (!client) {
            console.log("Client not found...");
            throw new AppError("Client not found!", 400);
        }

        console.log("email: " + email)
        if (email !== client.email) {
            console.log("update client email: " + email)
            const verifyEmail = this.clientRepository.findAByEmail(email);

            if (verifyEmail) {
                console.log("Email já usado...");
                throw new AppError("E-mail already used!", 400);
            }
        }

        client.name = name;
        client.email = email;
        client.telephone = telephone;
        client.cnpj = cnpj;

        await this.clientRepository.save(client);

        return client;
    }
}

export default UpdateClientService;
