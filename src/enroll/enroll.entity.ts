import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { type } from "os";
import { partialNote } from "src/partial-note/partial-note.entity";
import { Subject } from "../subject/subject.entity";
import { Student } from "src/student/schema/student.entity";
import { Period } from "src/period/period.entity";
import { Class } from "src/class/class.entity";

@Entity()
export class Enroll{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    finalNote: number;

    @Column()
    state: string;

    @Column()
    eliminated: boolean;

    @OneToMany(type => partialNote, partialnote => partialnote.enroll)
    partialnotes: partialNote[];

    @ManyToOne(type => Subject, subject => subject.enrolls)
    subject: Subject;

    @ManyToOne(type => Student, student => student.enrolls)
    student: Student;

    @OneToOne(type => Period, period => period.enroll)
    period: Period;
    
    @ManyToMany(() => Class)
    @JoinTable()
    classes: Class[];
}
