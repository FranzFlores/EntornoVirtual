import { Controller, Post, Body } from '@nestjs/common';
import { AccreditationService } from './accreditation.service';
import { AccreditationDTO } from './dto/accreditation.dto';

@Controller('accreditation')
export class AccreditationController {

    constructor(private accreditationService: AccreditationService){}

    @Post()
    createAccreditation(@Body() accreditation: AccreditationDTO){
        console.log(accreditation);
        return this.accreditationService.createAccreditation(accreditation);
    }
}
