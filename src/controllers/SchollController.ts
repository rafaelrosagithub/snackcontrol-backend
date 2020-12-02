import SchoolRepository from "../repositories/SchoolRepository";
import { Request, Response } from "express";
import UpdateSchoolService from "../services/UpdateSchoolService";

class SchoolController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        const schoolRepository = new SchoolRepository();

        const schools = await schoolRepository.findAll();

        return response.json(schools);
    }

    public async indexById(request: Request, response: Response): Promise<Response> {
        console.log("Schoo indexById()")
        const { id } = request.params;
        console.log("indexById: " + id)
        const schoolRepository = new SchoolRepository();
        const school = await schoolRepository.findAById(id);
        return response.json(school);
    }

    public async search(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { escola } = request.query;
        console.log("school search() " + escola)
        const schoolRepository = new SchoolRepository();

        const schools = await schoolRepository.findAllByName(
            escola?.toString() || ""
        );
        console.log("serach...")

        return response.json(schools);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;
        const { escola, school_category } = request.body;
        const schoolRepository = new SchoolRepository();
        const updateSchool = new UpdateSchoolService(schoolRepository);

        const school = await updateSchool.execute({
            id,
            escola,
            school_category
        });
        console.log("update cliente...");
        return response.json(school);
    }

}

export default SchoolController;
