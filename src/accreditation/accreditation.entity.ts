import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { PartialNote } from "src/partial-note/partial-note.entity";

@Entity()
export class Accreditation{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: String;

    @Column()
    topic: String;

    @Column()
    description: String;

    @Column()
    objective: String;

    @Column()
    dueDate: Date;

    @Column()
    qualification: number;
    
    @ManyToOne(type=>PartialNote, partialnote => partialnote.accreditations)
    partialnote: PartialNote;

}