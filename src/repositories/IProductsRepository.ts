import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Product from "../models/Product";

export default interface IProductsRepository {
    findAll(): Promise<Product[]>;
    findAllPaginated(page: number): Promise<[Product[], number]>;
    findAllByName(name: string): Promise<Product[]>;
    findAById(id: string): Promise<Product | undefined>;
    findAByEmail(email: string): Promise<Product | undefined>;
    create(createProductDTO: ICreateProductDTO): Promise<Product>;
    save(product: Product): Promise<Product>;
    delete(id: string): Promise<void>;
}
