import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { partialNote } from "src/partial-note/partial-note.entity";

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
    object: String;

    @Column()
    dueDate: Date;

    @Column()
    qualification: number;
    
    @ManyToOne(type=>partialNote, partialnote => partialnote.accreditations)
    partialnote: partialNote;

}