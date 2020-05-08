import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodDTO } from './dto/period.dto';

@Controller('period')
export class PeriodController {
    constructor(private periodService: PeriodService){}

    @Post('all')
    allPeriod(@Body() data: PeriodDTO){
        return this.periodService.allPeriods(data);
    }

    @Get('/:id')
    getPeriod(@Param('id') id){
        return this.periodService.getPeriod(id);
    }
    
    @Post('create')
    createPeriod(@Body() accreditation: PeriodDTO){
        return this.periodService.createPeriod(accreditation);
    }

    
    @Put('update/:id')
    updatePeriod(@Param('id') id, @Body() data: PeriodDTO){
        return this.periodService.updatePeriod(id, data);
    }
    
    @Patch('status/:id')
    statusPeriod(@Param('id') id, @Body() data: any){
        return this.periodService.statusPeriod(id, {state: data.state});
    }
}
