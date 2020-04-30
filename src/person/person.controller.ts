import { Controller, Post, Body } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDTO } from './dto/create-person.dto';

@Controller('person')
export class PersonController {

    constructor(private personService:PersonService){}

    @Post('createPerson')
    createPerson(@Body() person:CreatePersonDTO){
        return this.personService.createPerson(person);
    }

}
