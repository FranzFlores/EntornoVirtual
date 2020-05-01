import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from "typeorm";
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

    @OneToMany(type => PartialNote, partialnote => partialnote.enroll)
    partialnotes: PartialNote[];

    @ManyToOne(type => Subject, subject => subject.enrolls)
    subject: Subject;

    @ManyToOne(type => Student, student => student.enrolls)
    student: Student;

    @OneToOne(type => Period, period => period.enroll)
    @JoinColumn()
    period: Period;
    
    @ManyToMany(() => Class)
    @JoinTable()
    assistances: Class[];
}
