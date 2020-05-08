import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Period } from './period.entity';
import { Repository } from 'typeorm';
import { PeriodDTO } from './dto/period.dto';

@Injectable()
export class PeriodService {
    constructor(@InjectRepository(Period)
    private periodRepository: Repository<Period>){}

    async allPeriods(data: PeriodDTO){
        let periods = await this.periodRepository.find({where: {state: data.state}});
        return periods;        
    }

    async getPeriod(id: Number){
        let period = await this.periodRepository.findOne({where: {id}});
        return period;
    }

    async createPeriod(data: PeriodDTO){

        let period = await this.periodRepository.create(data);
        await this.periodRepository.save(period);    
    }

    async updatePeriod(id: number, data: PeriodDTO){
        let period = await this.periodRepository.update(id, data);
        return period;
    }

    async statusPeriod(id: number, data: any){
        let period = await this.periodRepository.update(id, data);
        return period;
    }
    
}
