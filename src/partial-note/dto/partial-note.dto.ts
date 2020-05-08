import { Enroll } from "src/enroll/enroll.entity";

export class PartialNoteDTO{
    testScore: number;
    averageTasks: number;
    averageLessons: number;
    enroll: Enroll;
}