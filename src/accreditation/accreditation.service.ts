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

    async allAccreditations(data: AccreditationDTO){
        let accreditations = await this.accreditationRepository.find({where: {type: data.type}});
        return accreditations;
        
    }
    async getAccreditation(id: Number){
        let accreditation = await this.accreditationRepository.findOne({where: {id}});
        return accreditation;
    }    
    async createAccreditation(data: AccreditationDTO){

        let accreditation = await this.accreditationRepository.create(data);
        await this.accreditationRepository.save(accreditation);
        
    }
    async updateAccreditation(id: number, data: AccreditationDTO){
        let accreditation = await this.accreditationRepository.update(id, data);
        return accreditation;
    }
    async deleteAccreditation(id: number, data: AccreditationDTO){
        let accreditation = await this.accreditationRepository.update(id, data);
        return accreditation;
    }
}
