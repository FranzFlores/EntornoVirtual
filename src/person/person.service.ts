import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './schema/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private peopleRepository: Repository<Person>
    ){}


    

}
