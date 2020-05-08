import { Controller, Post, Body, UseInterceptors, UseGuards, UploadedFile, Param, Res, Get, Put, Patch, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';

import { CreatePersonDTO } from './dto/create-person.dto';
import { UpdatePersonDTO } from './dto/update-person.dto';

import { PersonService } from './person.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { imageFileFilter, storageImage, storageFileStudent,storageFileAdministrative, pdfFileFilter } from "../utils/upload-file.utils";


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
    @Put('/update/:id')
    updatePerson(@Param('id') id, @Body() person: UpdatePersonDTO) {
        return this.personService.updatePerson(id, person);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/delete-restore/:id')
    deleteRestorePerson(@Param('id') id, @Body() data: any) {
        return this.personService.deleteRestorePerson(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/uploadImage/:id')
    @UseInterceptors(FileInterceptor('image', { storage: storageImage, fileFilter: imageFileFilter }))
    uploadFile(@UploadedFile() file, @Param('id') id) {
        return this.personService.uploadImage(id, file);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/uploadFileStudent/:id')
    @UseInterceptors(FileFieldsInterceptor([{ name: "degreeFile", maxCount: 1 },
    { name: "degreeCertificateFile", maxCount: 1 }],
    { storage: storageFileStudent, fileFilter: pdfFileFilter }))
    uploadFilesStudents(@UploadedFiles() files,@Param('id') id) {
        return this.personService.uploadFilesStudent(id,files);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/uploadFileAdministrative/:id')
    @UseInterceptors(FileFieldsInterceptor([{ name: "degreeFile", maxCount: 1 },
    { name: "degreeFourthLevelFile", maxCount: 1 }],
    { storage: storageFileAdministrative, fileFilter: pdfFileFilter }))
    uploadFilesAdministrative(@UploadedFiles() files,@Param('id') id) {
        return this.personService.uploadFilesAdministrative(id,files);
    }

    @Get('getImage/:imagePath')
    getImageUser(@Param('imagePath') img, @Res() res) {
        res.sendFile(img, { root: './uploads/person/images' })
    }

    @Get('getFileStudent/:filePath')
    getFileStudent(@Param('filePath') file, @Res() res) {
        res.sendFile(file, { root: './uploads/person/files/students' })
    }

    @Get('getFileAdministrative/:filePath')
    getFileAdministrative(@Param('filePath') file, @Res() res) {
        res.sendFile(file, { root: './uploads/person/files/administrative' })
    }
    
}
