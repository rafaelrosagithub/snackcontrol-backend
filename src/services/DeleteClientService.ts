import AppError from "../errors/AppError";
import IClientsRepository from "../repositories/IClientsRepository";

class DeleteClientService {
    private clientRepository: IClientsRepository;

    constructor(clientRepository: IClientsRepository) {
        this.clientRepository = clientRepository;
    }

    public async execute(id: string): Promise<void> {
        const client = await this.clientRepository.findAById(id);

        if (!client) {
            throw new AppError("Client not found! delete...", 400);
        }

        await this.clientRepository.delete(id);
    }
}

export default DeleteClientService;
