import { getRepository, Repository } from "typeorm";
import CreateUserDTO from "../dtos/CreateUserDTO";
import User from "../models/User";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email },
        });

        return user;
    }
    public async create({
        name,
        email,
        password,
        cpf,
        telephone
    }: CreateUserDTO): Promise<User | undefined> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
            cpf,
            telephone
        });

        await this.ormRepository.save(user);

        return user;
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
}

export default UserRepository;
