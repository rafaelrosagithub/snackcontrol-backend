import ICreateSchoolDTO from "../dtos/ICreateSchoolDTO";
import School from "../models/School";

export default interface ISchoolsRepository {
    findAll(): Promise<School[]>;
    findAllPaginated(page: number): Promise<[School[], number]>;
    findAllByName(name: string): Promise<School[]>;
    findAById(id: string): Promise<School | undefined>;
    findAByEmail(email: string): Promise<School | undefined>;
    create(createSchoolDTO: ICreateSchoolDTO): Promise<School>;
    save(scholl: School): Promise<School>;
    delete(id: string): Promise<void>;
}
