import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartialNote } from './partial-note.entity';
import { PartialNoteController } from './partial-note.controller';
import { PartialNoteService } from './partial-note.service';
import { partialNote } from './partial-note.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PartialNote])],
  controllers: [PartialNoteController],
  providers: [PartialNoteService]
})
export class PartialNoteModule {}
