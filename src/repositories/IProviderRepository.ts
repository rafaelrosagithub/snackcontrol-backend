import ICreateProviderDTO from "../dtos/ICreateProviderDTO";
import Provider from "../models/Provider";

export default interface IProviderRepository {
    findAll(): Promise<Provider[]>;
    findAllPaginated(page: number): Promise<[Provider[], number]>;
    findAllByName(name: string): Promise<Provider[]>;
    findAById(id: string): Promise<Provider | undefined>;
    findAByEmail(email: string): Promise<Provider | undefined>;
    create(createClientDTO: ICreateProviderDTO): Promise<Provider>;
    save(provider: Provider): Promise<Provider>;
    delete(id: string): Promise<void>;
}
