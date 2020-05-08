import { PartialNote } from "src/partial-note/partial-note.entity";

export class AccreditationDTO{
    type: String;
    topic: String;
    description: String;
    objective: String;
    dueDate: Date;
    qualification: number;
    partialnote: PartialNote;
}