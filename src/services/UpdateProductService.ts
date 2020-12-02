import AppError from "../errors/AppError";
import Product from "../models/Product";
import IProductsRepository from "../repositories/IProductsRepository";

interface IRequest {
    id: string;
    title: string;
    unid_medida: string;
    product_category: string;
}

class UpdateProviderService {
    private productRepository: IProductsRepository;

    constructor(productRepository: IProductsRepository) {
        this.productRepository = productRepository;
    }

    public async execute({
        id,
        title,
        unid_medida,
        product_category,
    }: IRequest): Promise<Product> {
        const product = await this.productRepository.findAById(id);

        if (!product) {
            console.log("Product not found...");
            throw new AppError("Product not found!", 400);
        }

        //console.log("email: " + email)
        /*if (email !== provider.email) {
            const verifyEmail = this.providerRepository.findAByEmail(email);

            if (verifyEmail) {
                console.log("Email já usado...");
                throw new AppError("E-mail already used!", 400);
            }
        }*/

        product.title = title;
        product.unid_medida = unid_medida;
        product.product_category = product_category;

        await this.productRepository.save(product);

        return product;
    }
}

export default UpdateProviderService;
