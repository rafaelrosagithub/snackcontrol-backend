import AppError from "../errors/AppError";
import Product from "../models/Product";
import IProductsRepository from "../repositories/IProductsRepository";

interface IRequest {
    title: string;
    product_category: string;
    unid_medida: string;
    active: boolean;
}

class CreateProductService {
    private productRepository: IProductsRepository;

    constructor(productRepository: IProductsRepository) {
        this.productRepository = productRepository;
    }

    public async execute({
        title,
        unid_medida,
        product_category,
        active
    }: IRequest): Promise<Product> {
        //const verifyClient = await this.clientRepository.findAByEmail(email);

        //if (verifyClient) {
        //    throw new AppError("Client already exists!", 400);
        //}

        const product = await this.productRepository.create({
            title,
            unid_medida,
            product_category,
            active
        });

        return product;
    }
}

export default CreateProductService;
