import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassDTO } from './dto/class.dto';

@Controller('class')
export class ClassController {

    constructor(private classService: ClassService){}

    @Get('all')
    allClasses(){
        return this.classService.allClasses();
    }

    @Get('/:id')
    getClass(@Param('id') id){
        return this.classService.getClass(id);
    }

    @Post('create')
    createClass(@Body() newClass: ClassDTO){
        return this.classService.createClass(newClass);
    }

    @Put('update/:id')
    updateClass(@Param('id') id, @Body() data: ClassDTO){
        return this.classService.updateClass(id, data);
    }

    @Patch('status/:id')
    deleteClass(@Param('id') id, @Body() data: ClassDTO){
        return this.classService.deleteClass(id, data);
    }
}
