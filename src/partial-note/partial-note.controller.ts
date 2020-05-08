import { Controller, Get, Param, Post, Body, Put, Patch } from '@nestjs/common';
import { PartialNoteService } from './partial-note.service';
import { PartialNoteDTO } from "./dto/partial-note.dto";

@Controller('partialNote')
export class PartialNoteController {

    constructor(private partialNoteService : PartialNoteService){}

    @Get('all')
    allPartialNotes(){
        return this.partialNoteService.allPartialNotes();
    }
    @Get('/:id')
    getPartialNote(@Param('id') id){
        return this.partialNoteService.getPartialNote(id);
    }

    @Post('create')
    createpartialNote(@Body() newpartialNote: PartialNoteDTO){
        return this.partialNoteService.createPartialNote(newpartialNote);
    }

    @Put('update/:id')
    updatepartialNote(@Param('id') id, @Body() data: PartialNoteDTO){
        return this.partialNoteService.updatePartialNote(id, data);
    }

    @Patch('status/:id')
    deletepartialNote(@Param('id') id, @Body() data: PartialNoteDTO){
        return this.partialNoteService.deletePartialNote(id, data);
    }

}
