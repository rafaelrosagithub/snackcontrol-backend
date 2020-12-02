import { getRepository, Like, Repository } from "typeorm";
import ICreateSchoolDTO from "../dtos/ICreateSchoolDTO";
import School from "../models/School";
import ISchollsRepository from "./ISchoolsRepository";

class SchoolRepository implements ISchollsRepository {
    private ormRepository: Repository<School>;

    constructor() {
        this.ormRepository = getRepository(School);
    }
    findAByEmail(email: string): Promise<School | undefined> {
        throw new Error("Method not implemented.");
    }

    public async findAll(): Promise<School[]> {
        console.log("findAll...");
        return this.ormRepository.find({
            order: {
                escola: "ASC",
            },
        });
    }

    public async findAllPaginated(page: number): Promise<[School[], number]> {
        console.log("findAllPaginated...");
        return this.ormRepository.findAndCount({
            skip: page,
            take: 10,
        });
    }

    public async findAllByName(escola: string): Promise<School[]> {
        console.log("findAllBuyName...");
        return this.ormRepository.find({
            escola: Like(`%${escola}%`),
        });
    }

    public async findAById(id: string): Promise<School | undefined> {
        console.log("SchoolRepository findById()");
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async create({ escola }: ICreateSchoolDTO): Promise<School> {
        const school = this.ormRepository.create({
            escola,
        });

        await this.ormRepository.save(school);

        return school;
    }

    public async save(school: School): Promise<School> {
        return this.ormRepository.save(school);
    }

    public async delete(id: string): Promise<void> {
        this.ormRepository.delete(id);
    }
}

export default SchoolRepository;
