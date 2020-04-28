import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Subject } from "../subject/subject.entity";
import { Class } from "../class/class.entity";

@Entity()
export class descriptionPartial{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: String;

    @Column()
    assignedDate: Date;

    @Column()
    dueDate: Date;

    @ManyToOne(type=>Subject, subject => subject.descriptionpartials)
    subject: Subject;

    @OneToMany(type => Class, entityclass => entityclass.descriptionpartial)
    classes: Class[];
}