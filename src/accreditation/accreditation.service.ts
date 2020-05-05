import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Accreditation } from "./accreditation.entity";
import { AccreditationDTO } from "./dto/accreditation.dto";

@Injectable()
export class AccreditationService {
    constructor(
        @InjectRepository(Accreditation)
        private accreditationRepository: Repository<Accreditation>
    ){}
    async createAccreditation(data: AccreditationDTO){

        let accreditation = await this.accreditationRepository.create(data);
        await this.accreditationRepository.save(accreditation);
        
    }    
}
