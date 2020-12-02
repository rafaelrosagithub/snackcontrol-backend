import IPaginated from "../interfaces/paginated";
import Client from "../models/Client";
import Provider from "../models/Provider";
import IProviderRepository from "../repositories/IProviderRepository";

interface IRequest {
    page: number;
}

class PaginatedProviderService {
    private providerRepository: IProviderRepository;

    constructor(providerRepository: IProviderRepository) {
        this.providerRepository = providerRepository;
    }

    public async execute({ page }: IRequest): Promise<IPaginated<Provider>> {
        const [provider, total] = await this.providerRepository.findAllPaginated(
            page * 10
        );

        const totalPages = Math.ceil(total / 10);

        const response: IPaginated<Provider> = {
            data: provider,
            totalElements: total,
            page,
            elements: provider.length,
            elementsPerPage: 10,
            totalPages,
            fistPage: page === 0,
            lastPage: page === totalPages - 1,
        };
        console.log("testsete...");
        return response;
    }
}

export default PaginatedProviderService;
