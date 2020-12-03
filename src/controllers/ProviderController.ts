import ClientRepository from "../repositories/ClientRepository";
import ProviderRepository from "../repositories/ProviderRepository";
import { Request, Response } from "express";
import CreateClientService from "../services/CreateClientService";
import CreateProviderService from "../services/CreateProviderService";
import UpdateProviderService from "../services/UpdateProviderService";
import UpdateClientService from "../services/UpdateClientService";
import PaginatedClientService from "../services/PaginatedClientService";
import PaginatedProviderService from "../services/PaginatedProviderService";
import DeleteClientService from "../services/DeleteClientService";

class ProviderController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProviderController index()")
        const providerRepository = new ProviderRepository();

        const providers = await providerRepository.findAll();

        return response.json(providers);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("indexById...");
        const { id } = request.params;
        console.log("indexById: " + id);
        const providerRepository = new ProviderRepository();
        const provider = await providerRepository.findAById(id);
        return response.json(provider);
    }

    public async paginated(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { page } = request.query;

        const providerRepository = new ProviderRepository();
        const providerPaginated = new PaginatedProviderService(providerRepository);
        const provider = await providerPaginated.execute({
            page: page !== undefined ? parseInt(page.toString(), 10) : 0,
        });

        return response.json(provider);
    }

    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProviderController search()")
        const { name } = request.query;
        const providerRepository = new ProviderRepository();
        console.log(name)
        const provider = await providerRepository.findAllByName(
            name?.toString() || ""
        );
        console.log(provider)
        return response.json(provider);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { name, email, telephone, cnpj, user_uuid } = request.body;
        const providerRepository = new ProviderRepository();
        const createProvider = new CreateProviderService(providerRepository);

        const client = await createProvider.execute({
            name,
            email,
            telephone,
            cnpj,
            user_uuid,
        });

        return response.status(201).json(client);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;
        const { name, email, telephone, cnpj } = request.body;
        const providerRepository = new ProviderRepository();
        const updateProvider = new UpdateProviderService(providerRepository);

        const provider = await updateProvider.execute({
            id,
            name,
            email,
            telephone,
            cnpj,
        });
        console.log("update provider...");
        return response.json(provider);
    }

}

export default ProviderController;
