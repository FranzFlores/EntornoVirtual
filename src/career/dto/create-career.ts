import { CreateFacultyDTO } from "src/faculty/dto/create-faculty";

export class CreateCareerDTO{
    readonly name: string;
    readonly objective: string;
    readonly mission: string;
    readonly vision: string;
    readonly profile: string;
    readonly faculty: CreateFacultyDTO;
}