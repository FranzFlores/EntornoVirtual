import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PartialNote } from './partial-note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartialNoteService {

    constructor(@InjectRepository(PartialNote) private partialNoteRepository: Repository<PartialNote>){}

    async allPartialNotes(){
        let classes = await this.partialNoteRepository.find();
        return classes;
    }

    async getPartialNote(id: number){
        let partialNote = await this.partialNoteRepository.findOne({where: {id}});
        return partialNote;
    }
    
    async createPartialNote(newPartialNote: any):Promise<PartialNote>{
        const { id } = newPartialNote;
        let createdPartialNote = await this.partialNoteRepository.findOne({where: {id}});
        if (createdPartialNote) throw new HttpException('La nota parcial ya se encuentra creada', HttpStatus.BAD_REQUEST);

        let createPartialNote = await this.partialNoteRepository.create(newPartialNote);
        await this.partialNoteRepository.save(createPartialNote);
        return createdPartialNote;
    }

    async updatePartialNote(id: number, data: any){
        let updatePartialNote = await this.partialNoteRepository.update(id, data);
        return updatePartialNote;
    }

    async deletePartialNote(id: number, data: any){
        let deletePartialNote = await this.partialNoteRepository.update(id, data);
        return deletePartialNote;
    }    
}
