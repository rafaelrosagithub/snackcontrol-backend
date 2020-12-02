import { getRepository, Like, Repository } from "typeorm";
import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Product from "../models/Product";
import IProductsRepository from "./IProductsRepository";

class ProductRepository implements IProductsRepository {
    private ormRepository: Repository<Product>;

    constructor() {
        this.ormRepository = getRepository(Product);
    }

    public async findAll(): Promise<Product[]> {
        console.log("ProductRepository findAll()");
        return this.ormRepository.find({
            order: {
                title: "ASC",
            },
        });
    }

    public async findAllPaginated(page: number): Promise<[Product[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(title: string): Promise<Product[]> {
        console.log("findAllBuyName...")
        return this.ormRepository.find({
            title: Like(`%${title}%`),
        });
    }

    public async findAById(id: string): Promise<Product | undefined> {
        console.log("findById...")
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findAByEmail(email: string): Promise<Product | undefined> {
        return this.ormRepository.findOne({
            where: { email },
        });
    }

    public async create({
        title,
        unid_medida,
        product_category,
    }: ICreateProductDTO): Promise<Product> {
        const product = this.ormRepository.create({
            title,
            unid_medida,
            product_category,
        });

        await this.ormRepository.save(product);

        return product;
    }

    public async save(product: Product): Promise<Product> {
        return this.ormRepository.save(product);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default ProductRepository;
