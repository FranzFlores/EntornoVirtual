import { Controller, Post, Body, UseInterceptors, UploadedFile, Param, Res, Get } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDTO } from './dto/create-person.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { storage, imageFileFilter } from "../utils/upload-file.utils";

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Post('createPerson')
    createPerson(@Body() person: CreatePersonDTO) {
        return this.personService.createPerson(person);
    }

    @Post('list')
    peopleList(@Body() data: any) {
        return this.personService.peopleList(data);
    }


    @Post('uploadImage/:id')
    @UseInterceptors(FileInterceptor('image', { storage:storage,fileFilter: imageFileFilter }))
    uploadFile(@UploadedFile() file, @Param('id') id) {   
        return this.personService.uploadImage(id,file);
    }

    @Get('getImage/:imagePath')
    getImageUser(@Param('imagePath') img, @Res() res) {
        res.sendFile(img, { root: './uploads/person' })
    }


}
