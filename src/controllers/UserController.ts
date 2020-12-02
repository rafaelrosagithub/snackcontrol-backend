import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";
import EnableUserService from "../services/EnableUserService";
import UpdateUserService from "../services/UpdateUserService";

class UserContoller {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { name, email, password, cpf, telephone } = request.body;

        const userRepository = new UserRepository();
        const createUser = new CreateUserService(userRepository);

        const user = await createUser.execute({
            name,
            email,
            password,
            cpf,
            telephone
        });

        delete user.password;

        return response.json(user);
    }

    public async enable(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;

        const userRepository = new UserRepository();
        const enableUser = new EnableUserService(userRepository);

        const user = await enableUser.execute({
            id,
        });

        delete user.password;

        return response.json(user);
    }

    public async indexById(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;
        console.log("indexById users: " + id);
        const userRepository = new UserRepository();
        const user = await userRepository.findById(id);
        return response.json(user);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        console.log("update user...")
        const { id } = request.params;
        const { name, email, cpf, telephone} = request.body;
        const userRepository = new UserRepository();
        const updateUser = new UpdateUserService(userRepository);

        const user = await updateUser.execute({
            id,
            name,
            email,
            cpf,
            telephone
        });
        console.log("update user...");
        return response.json(user);
    }
}

export default UserContoller;
