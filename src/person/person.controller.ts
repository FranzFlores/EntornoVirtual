import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDTO } from './dto/create-person.dto';

import multiparty from "connect-multiparty";
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('person')
export class PersonController {

    constructor(private personService:PersonService){}

    @Post('createPerson')
    createPerson(@Body() person:CreatePersonDTO){
        return this.personService.createPerson(person);
    }

    @Post('list')
    peopleList(@Body() data:any){
        return this.personService.peopleList(data);
    }

     @Post('upload')
     @UseInterceptors(FileInterceptor('file'))
     uploadFile(@UploadedFile() file){
        console.log(file);
     }
    

}
