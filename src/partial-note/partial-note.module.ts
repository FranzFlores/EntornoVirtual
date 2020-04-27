import { Module } from '@nestjs/common';
import { PartialNoteController } from './partial-note.controller';
import { PartialNoteService } from './partial-note.service';

@Module({
  controllers: [PartialNoteController],
  providers: [PartialNoteService]
})
export class PartialNoteModule {}
