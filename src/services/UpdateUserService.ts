import AppError from "../errors/AppError";
import Client from "../models/Client";
import User from "../models/User";
import IClientsRepository from "../repositories/IClientsRepository";
import IUserRepository from "../repositories/IUserRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    cpr: string;
    telephone: string;
}

class UpdateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({
        id,
        name,
        email,
        telephone
    }: IRequest): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            console.log("User not found...");
            throw new AppError("Client not found!", 400);
        }
        console.log("email: " + email);
        if (email !== user.email) {
            const verifyEmail = this.userRepository.findByEmail(email);
            console.log(verifyEmail)
            if (verifyEmail) {
                console.log("Email já usado...");
                throw new AppError("E-mail already used!", 400);
            }
        }

        user.name = name;
        user.email = email;

        await this.userRepository.save(user);

        return user;
    }
}

export default UpdateUserService;
