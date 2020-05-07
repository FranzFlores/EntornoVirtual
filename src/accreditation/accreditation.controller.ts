import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { AccreditationService } from './accreditation.service';
import { AccreditationDTO } from './dto/accreditation.dto';

@Controller('accreditation')
export class AccreditationController {

    constructor(private accreditationService: AccreditationService){}

    @Post('all')
    allAccreditation(@Body() data: AccreditationDTO){
        return this.accreditationService.allAccreditations(data);
    }

    @Get('/:id')
    getAccreditation(@Param('id') id){
        return this.accreditationService.getAccreditation(id);
    }
    
    @Post('create')
    createAccreditation(@Body() accreditation: AccreditationDTO){
        return this.accreditationService.createAccreditation(accreditation);
    }

    
    @Put('update/:id')
    updateAccreditation(@Param('id') id, @Body() data: AccreditationDTO){
        return this.accreditationService.updateAccreditation(id, data);
    }
    
    @Patch('delete/:id')
    deleteAccreditation(@Param('id') id, @Body() data: AccreditationDTO){
        return this.accreditationService.deleteAccreditation(id, data);
    }
}
