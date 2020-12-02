import AppError from "../errors/AppError";
import School from "../models/School";
import ISchoolsRepository from "../repositories/ISchoolsRepository";

interface IRequest {
    id: string;
    escola: string;
    school_category: string;
}

class UpdateSchoolService {
    private schoolRepository: ISchoolsRepository;

    constructor(schoolRepository: ISchoolsRepository) {
        this.schoolRepository = schoolRepository;
    }

    public async execute({
        id,
        escola,
        school_category
    }: IRequest): Promise<School> {
        console.log("id execute(): " + id)
        const school = await this.schoolRepository.findAById(id);
        console.log("id: " + school)
        if (!school) {
            console.log("School not found...");
            throw new AppError("School not found!", 400);
        }

        school.escola = escola;
        school.school_category = school_category;

        await this.schoolRepository.save(school);

        return school;
    }
}

export default UpdateSchoolService;
