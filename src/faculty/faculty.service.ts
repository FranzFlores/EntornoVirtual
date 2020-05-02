import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Faculty } from './schema/faculty.entity';

import { CreateFacultyDTO } from "./dto/create-faculty";

@Injectable()
export class FacultyService {

    constructor(
        @InjectRepository(Faculty)
        private facultyRepository: Repository<Faculty>
    ){}

    async createFaculty(data: CreateFacultyDTO):Promise<Faculty>{
        const { name } = data;
        let faculty = await this.facultyRepository.findOne({where:{name}});
        if (faculty) throw new HttpException('La facultad ya existe', HttpStatus.BAD_REQUEST);
        
        faculty = await this.facultyRepository.create(data);
        await this.facultyRepository.save(faculty);

        return faculty;
    }

    async facultyList(data:any){   
        let faculties = await this.facultyRepository.find({where:{status:data.status}});
        return faculties;
    }

    async getFaculty(id:number){
        let faculty = await this.facultyRepository.findOne({where:{id},relations:["careers"]});
        return faculty;
    }

    async updateFaculty(id:number,data:CreateFacultyDTO){
       let faculty = await this.facultyRepository.update(id,data);
       return faculty;
    }

    async deleteRestoreFaculty(id:number,data:any){
        let faculty = await this.facultyRepository.update(id,{status:data.status});
        return faculty;
    }

}
