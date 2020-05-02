import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Curriculum } from 'src/curriculum/schema/curriculum.entity';
import { CreateCurriculumDTO } from './dto/create-curriculum';


@Injectable()
export class CurriculumService {
    constructor(
        @InjectRepository(Curriculum)
        private curriculumRepository: Repository<Curriculum>
    ){}    

    async createCurriculum(data:CreateCurriculumDTO):Promise<Curriculum>{
        const {name} = data;
        let curriculum = await this.curriculumRepository.findOne({where:{name}});
        if (curriculum) throw new HttpException('La carrera ya existe', HttpStatus.BAD_REQUEST);

        curriculum = await this.curriculumRepository.create(data);
        await this.curriculumRepository.save(curriculum);

        return curriculum;
    }

    async curriculumList(data:any){
        let curriculums = await this.curriculumRepository.find({where:{status:data.status}});
        return curriculums;
    }

    async getCurriculum(id:number){
        let curriculum = await this.curriculumRepository.findOne({where:{id},relations:["subjects"]});
        return curriculum;
    }

    async updateCurriculum(id:number,data:CreateCurriculumDTO){
       let curriculum = await this.curriculumRepository.update(id,data);
       return curriculum;
    }

    async deleteRestoreCurriculum(id:number,data:any){
        let curriculum = await this.curriculumRepository.update(id,{status:data.status});
        return curriculum;
    }


}
