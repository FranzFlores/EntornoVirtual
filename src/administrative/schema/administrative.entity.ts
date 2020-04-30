import { Column,PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToMany,JoinTable } from 'typeorm';
import { Person } from 'src/person/schema/person.entity';
import { Role } from 'src/role/schema/role.entity';

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