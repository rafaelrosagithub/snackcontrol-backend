import AppError from "../errors/AppError";
import Client from "../models/Client";
import Provider from "../models/Provider";
import IClientsRepository from "../repositories/IClientsRepository";
import IProviderRepository from "../repositories/IProviderRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    telephone: string;
    cnpj: string;
}

class UpdateProviderService {
    private providerRepository: IProviderRepository;

    constructor(providerRepository: IProviderRepository) {
        this.providerRepository = providerRepository;
    }

    public async execute({
        id,
        name,
        email,
        telephone,
        cnpj,
    }: IRequest): Promise<Provider> {
        const provider = await this.providerRepository.findAById(id);

        if (!provider) {
            console.log("Client not found...");
            throw new AppError("Client not found!", 400);
        }

        console.log("email: " + email)
        if (email !== provider.email) {
            const verifyEmail = this.providerRepository.findAByEmail(email);

            if (verifyEmail) {
                console.log("Email já usado...");
                throw new AppError("E-mail already used!", 400);
            }
        }

        provider.name = name;
        provider.email = email;
        provider.telephone = telephone;
        provider.cnpj = cnpj;

        await this.providerRepository.save(provider);

        return provider;
    }
}

export default UpdateProviderService;
