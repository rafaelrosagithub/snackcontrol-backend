import CreateUserDTO from "../dtos/CreateUserDTO";
import User from "../models/User";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(createUserDTO: CreateUserDTO): Promise<User | undefined>;
    save(user: User): Promise<User | undefined>;
}
