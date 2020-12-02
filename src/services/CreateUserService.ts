import { hash } from "bcryptjs";
import User from "../models/User";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

interface Request {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
}

class CreateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ name, email, password, cpf, telephone }: Request) {
        const passwordHash = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            cpf,
            telephone
        });

        return user;
    }
}

export default CreateUserService;
