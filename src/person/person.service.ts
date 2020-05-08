import * as bcrypt from 'bcrypt';

import { Injectable, HttpException, HttpStatus,Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Person } from './schema/person.entity';
import { Account } from 'src/account/schema/account.entity';
import { Student } from 'src/student/schema/student.entity';
import { Administrative } from 'src/administrative/schema/administrative.entity';

import { CreatePersonDTO } from './dto/create-person.dto';
import { UpdatePersonDTO } from './dto/update-person.dto';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,

        @InjectRepository(Account)
        private accountRepository: Repository<Account>,

        @InjectRepository(Student)
        private studentRepository: Repository<Student>,

        @InjectRepository(Administrative)
        private administrativeRepository: Repository<Administrative>
    ) { }


    async createPerson(data: CreatePersonDTO) {
        //Comprobar si la persona ya esta registrada por su cedula
        const { dni } = data;
        let person = await this.personRepository.findOne({ where: { dni } });
        if (person) {
            throw new HttpException('La persona ya existe', HttpStatus.BAD_REQUEST);
        }

        // //Creacion de la persona
        person = await this.personRepository.create(data);
        await this.personRepository.save(person);

        //Creacion de Cuenta
        let account = await this.accountRepository.create();
        account.institutionalEmail = data.institutionalEmail;
        account.person = person;
        //Encriptar la clave del usuario
        account.password = await bcrypt.hash(data.password, 10);
        await this.accountRepository.save(account);

        // Verificar si es un estudiante o Administrativo
        if (data.type == "Estudiante") {
            let student = await this.studentRepository.create();
            student.degreeFile = data.degreeFileS;
            student.degreeCertificateFile = data.degreeCertificateFile;
            student.person = person;
            await this.studentRepository.save(student);
            return student;
        } else if (data.type == "Administrativo") {
            let administrative = await this.administrativeRepository.create();
            administrative.degree = data.degree;
            administrative.degreeFile = data.degreeFileA;
            administrative.degreeFourthLevel = data.degreeFourthLevel;
            administrative.degreeFourthLevelFile = data.degreeFourthLevelFile;
            administrative.person = person;
            await this.administrativeRepository.save(administrative);
            return administrative;
        }
    }

    async peopleList(data: any) {
        if (data.type == "Estudiante") {
            let students = await this.personRepository.find({ where: { status: data.status }, relations: ["account", "student"] });
            return students;
        } else if (data.type == "Administrativo") {
            let administratives = await this.personRepository.find({ where: { status: data.status }, relations: ["account", "administrative"] })
            return administratives;
        }
    }

    async uploadImage(id: number, data: any) {
        const person = await this.personRepository.findOne({ where: { id } });
        if (!person) {
            throw new HttpException('La persona no existe', HttpStatus.BAD_REQUEST);
        }
        person.image = data.filename;
        let personUpdate = await this.personRepository.update(id, person);
        return personUpdate;
    }

    async uploadPerson(id:number,data: UpdatePersonDTO){
        let personUpdate = await this.personRepository.findOne(id);
        personUpdate.firstName1 = data.firstName1;
        personUpdate.firstName2 = data.firstName2;
        personUpdate.lastName1 = data.lastName1;
        personUpdate.lastName2 = data.lastName2;
        personUpdate.personalEmail = data.personalEmail;
        personUpdate.address = data.address;
        personUpdate.cellphone = data.cellphone;
        personUpdate.maritalStatus = data.maritalStatus;
    
        let person = await this.personRepository.update(id,personUpdate);

        let personInfo = await this.personRepository.findOne({where:{id},relations:["student","administrative"]});
        if (data.type == "Estudiante") {
            let student = await this.studentRepository.findOne({where:{id:personInfo.student.id}});
            student.cycle = data.cycle;
            await this.studentRepository.update(student.id,student);
            return student;    
        }else{
            let administrative = await this.administrativeRepository.findOne({where:{id:personInfo.administrative.id}});
            administrative.degree = data.degree;
            administrative.degreeFourthLevel = data.degreeFourthLevel;
            await this.administrativeRepository.update(administrative.id,administrative);
            return administrative;
        }
    }

    async deleteRestorePerson(id:number,data:any){
        let person = await this.personRepository.update(id,data);
        return person;
    }
    



}
