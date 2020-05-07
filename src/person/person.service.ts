import * as bcrypt from 'bcrypt';

import { Injectable, HttpException, HttpStatus,Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Person } from './schema/person.entity';
import { Account } from 'src/account/schema/account.entity';
import { Student } from 'src/student/schema/student.entity';
import { Administrative } from 'src/administrative/schema/administrative.entity';

import { ParsedPath } from "path";
import { CreatePersonDTO } from './dto/create-person.dto';

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

        var fileName = data.originalname.split('.');
        var extension = fileName[fileName.length - 1];
        person.image = data.filename + '.' + extension;

        let personUpdate = await this.personRepository.update(id, person);
        return personUpdate;
    }

    async getImage(fileName: string,@Res() res) {
        const path_file = './uploads/person/' + fileName;
        
    }


}
