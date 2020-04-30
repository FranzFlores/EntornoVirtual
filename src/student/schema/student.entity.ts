import { Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToOne } from "typeorm";
import { Person } from "src/person/schema/person.entity";

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

}
