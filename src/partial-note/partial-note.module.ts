import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartialNoteController } from './partial-note.controller';
import { PartialNoteService } from './partial-note.service';
import { partialNote } from './partial-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([partialNote])],
  controllers: [PartialNoteController],
  providers: [PartialNoteService]
})
export class PartialNoteModule {}
