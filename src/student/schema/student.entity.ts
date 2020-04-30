import { Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Person } from "src/person/schema/person.entity";
import { Enroll } from "src/enroll/enroll.entity";

@Entity()
export class Student{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    degreeFile: string;

    @Column()
    degreeCertificateFile: string;

    @Column({default:1})
    cycle: number;

    @OneToOne(()=>Person,(person:Person)=>person.student)
    @JoinColumn()
    person:Person;

    @OneToMany(type => Enroll, enroll => enroll.student)
    enrolls: Enroll[];

}
