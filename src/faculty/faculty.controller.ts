import { Controller, Post, Body, Get, Put, Param, Patch } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDTO } from './dto/create-faculty';


@Controller('faculty')
export class FacultyController {

    constructor(private facultyService: FacultyService) { }

    @Post('create')
    createFaculty(@Body() faculty: CreateFacultyDTO) {
        return this.facultyService.createFaculty(faculty);
    }

    @Post('list')
    facultyList(@Body() data: any) {
        return this.facultyService.facultyList(data);
    }

    @Get('/:id')
    getFaculty(@Param('id') id){
        return this.facultyService.getFaculty(id);
    }

    @Put('update/:id')
    updateFaculty(@Param('id') id, @Body() faculty: CreateFacultyDTO) {
        return this.facultyService.updateFaculty(id, faculty);
    }

    @Patch('delete-restore/:id')
    deleteRestoreFaculty(@Param('id') id, @Body() data: any) {
        return this.facultyService.deleteRestoreFaculty(id, data);
    }

}
