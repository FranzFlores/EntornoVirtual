import { CreateCareerDTO } from "src/career/dto/create-career";

export class CreateCurriculumDTO{
    readonly name:string;
    readonly year:number;
    readonly numberCredits:number;
    readonly numberHours:number;
    readonly carrer:CreateCareerDTO;
}