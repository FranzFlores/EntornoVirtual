import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Career } from './schema/career.entity';
import { CreateCareerDTO } from './dto/create-career';

@Injectable()
export class CareerService {

    constructor(
        @InjectRepository(Career)
        private careerRepository: Repository<Career>
    ){}    

    async createCareer(data:CreateCareerDTO):Promise<Career>{
        const {name} = data;
        let career = await this.careerRepository.findOne({where:{name}});
        if (career) throw new HttpException('La carrera ya existe', HttpStatus.BAD_REQUEST);

        career = await this.careerRepository.create(data);
        await this.careerRepository.save(career);

        return career;
    }

    async careerList(data:any){
        let careers = await this.careerRepository.find({where:{status:data.status}});
        return careers;
    }

    async getCareer(id:number){
        let career = await this.careerRepository.findOne({where:{id},relations:["curriculums"]});
        return career;
    }

    async updateCareer(id:number,data:CreateCareerDTO){
       let career = await this.careerRepository.update(id,data);
       return career;
    }

    async deleteRestoreCareer(id:number,data:any){
        let career = await this.careerRepository.update(id,{status:data.status});
        return career;
    }
}
