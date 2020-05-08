import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { Repository } from 'typeorm';
import { ClassDTO } from './dto/class.dto';

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(Class)
        private classRepository: Repository<Class>
    ){}

    async allClasses(){
        let classes = await this.classRepository.find();
        return classes;
    }

    async getClass(id: number){
        let oneClass = await this.classRepository.findOne({where: {id}});
        return oneClass;
    }
    
    async createClass(newClass: any):Promise<Class>{
        const { date } = newClass;
        let createdClass = await this.classRepository.findOne({where: {date}});
        if (createdClass) throw new HttpException('La clase para esa fecha ya se encuentra creada', HttpStatus.BAD_REQUEST);

        let createClass = await this.classRepository.create(newClass);
        await this.classRepository.save(createClass);
        return createdClass;
    }

    async updateClass(id: number, data: any){
        let updateClass = await this.classRepository.update(id, data);
        return updateClass;
    }

    async deleteClass(id: number, data: any){
        let deleteClass = await this.classRepository.update(id, data);
        return deleteClass;
    }

}
