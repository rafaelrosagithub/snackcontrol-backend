import ProductRepository from "../repositories/ProductRepository";
import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";

class ProductController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProductController index()")
        const productRepository = new ProductRepository();

        const products = await productRepository.findAll();

        return response.json(products);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("indexById");
        const { id } = request.params;
        console.log("indexById: " + id);
        const productRepository = new ProductRepository();
        const products = await productRepository.findAById(id);
        return response.json(products);
    }


    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProductController search()")
        const { title } = request.query;
        const productRepository = new ProductRepository();

        const products = await productRepository.findAllByName(
            title?.toString() || ""
        );

        return response.json(products);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { title, unid_medida, product_category, active } = request.body;
        const productRepository = new ProductRepository();
        const createProduct = new CreateProductService(productRepository);

        const product = await createProduct.execute({
            title,
            unid_medida,
            product_category,
            active,
        });

        return response.status(201).json(product);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("ProductController update()")
        const { id } = request.params;
        const { title, unid_medida, product_category } = request.body;
        const productRepository = new ProductRepository();
        const updateProduct = new UpdateProductService(productRepository);

        const product = await updateProduct.execute({
            id,
            title,
            unid_medida,
            product_category
        });
        console.log("update product...");
        return response.json(product);
    }
}

export default ProductController;
