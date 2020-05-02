import { Controller, Post, Body,Get,Param,Patch,Put } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDTO } from './dto/create-career';

@Controller('career')
export class CareerController {

    constructor(private careerService: CareerService) { }

    @Post('create')
    createCareer(@Body() career: CreateCareerDTO){
        return this.careerService.createCareer(career);
    }

    @Post('list')
    careerList(@Body() data:any){
        return this.careerService.careerList(data);
    }

    @Get('/:id')
    getCareer(@Param('id') id){
        return this.careerService.getCareer(id);
    }

    @Put('update/:id')
    updateCareer(@Param('id') id, @Body() career: CreateCareerDTO) {
        return this.careerService.updateCareer(id, career);
    }

    @Patch('delete-restore/:id')
    deleteRestoreCareer(@Param('id') id, @Body() data: any) {
        return this.careerService.deleteRestoreCareer(id, data);
    }

}
