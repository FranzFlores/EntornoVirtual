import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './schema/student.entity';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ){}




}
