import AppError from "../errors/AppError";
import User from "../models/User";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

interface Request {
    id: string;
}

class EnableUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ id }: Request) {
        console.log("asdfasdf");

        try {
            const user = await this.userRepository.findById(id);
            if (user != undefined) {
                user.active = !user.active;
                await this.userRepository.save(user);
                return user;
            }
        } catch (e) {
            throw new AppError("Usuário não encontrado", 400);
        }
    }
}

export default EnableUserService;
