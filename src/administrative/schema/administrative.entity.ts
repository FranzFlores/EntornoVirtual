import { Column,PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Person } from 'src/person/schema/person.entity';

@Entity()
export class Administrative{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    degree: string;

    @Column()
    degreeFile: string;

    @Column()
    degreeFourthLevel: string;

    @Column()
    degreeFourthLevelFile: string;

    @OneToOne(()=>Person,(person:Person)=>person.administrative)
    @JoinColumn()
    person:Person;
}