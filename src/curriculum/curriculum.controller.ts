import { Controller, Body, Post,Get,Put,Patch,Param } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CreateCurriculumDTO } from './dto/create-curriculum';

@Controller('curriculum')
export class CurriculumController {

    constructor(private curriculumService: CurriculumService) { }

    @Post('create')
    createCurriculum(@Body() curriculum: CreateCurriculumDTO){
        return this.curriculumService.createCurriculum(curriculum);
    }

    @Post('list')
    curriculumList(@Body() data:any){
        return this.curriculumService.curriculumList(data);
    }

    @Get('/:id')
    getCurriculum(@Param('id') id){
        return this.curriculumService.getCurriculum(id);
    }

    @Put('update/:id')
    updateCurriculum(@Param('id') id, @Body() curriculum: CreateCurriculumDTO) {
        return this.curriculumService.updateCurriculum(id, curriculum);
    }

    @Patch('delete-restore/:id')
    deleteRestoreCurriculum(@Param('id') id, @Body() data: any) {
        return this.curriculumService.deleteRestoreCurriculum(id, data);
    }


}
