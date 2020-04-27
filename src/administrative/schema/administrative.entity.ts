import { Column, ChildEntity } from 'typeorm';
import { Person } from '../../person/schema/person.entity';


@ChildEntity()
export class Administrative extends Person{
    @Column()
    degree: string;

    @Column()
    degreeFile: string;

    @Column()
    degreeFourthLevel: string;

    @Column()
    degreeFourthLevelFile: string;
}