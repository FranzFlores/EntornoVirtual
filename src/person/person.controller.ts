import { Controller, Post, Body, UseInterceptors,UseGuards, UploadedFile, Param, Res, Get, Put, Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreatePersonDTO } from './dto/create-person.dto';
import { UpdatePersonDTO } from './dto/update-person.dto';

import { PersonService } from './person.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { storage, imageFileFilter } from "../utils/upload-file.utils";


@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Post('createPerson')
    createPerson(@Body() person: CreatePersonDTO) {
        return this.personService.createPerson(person);
    }

    @UseGuards(JwtAuthGuard)
    @Post('list')
    peopleList(@Body() data: any) {
        return this.personService.peopleList(data);
    }

    @UseGuards(JwtAuthGuard)
    @Post('uploadImage/:id')
    @UseInterceptors(FileInterceptor('image', { storage:storage,fileFilter: imageFileFilter }))
    uploadFile(@UploadedFile() file, @Param('id') id) {   
        return this.personService.uploadImage(id,file);
    }

    @Get('getImage/:imagePath')
    getImageUser(@Param('imagePath') img, @Res() res) {
        res.sendFile(img, { root: './uploads/person' })
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    updatePerson(@Param('id') id, @Body() person:UpdatePersonDTO){
        return this.personService.uploadPerson(id,person);
    }    
    
    @UseGuards(JwtAuthGuard)
    @Patch('/delete-restore/:id')
    deleteRestorePerson(@Param('id') id,@Body() data:any){
        return this.personService.deleteRestorePerson(id,data);
    }


}
