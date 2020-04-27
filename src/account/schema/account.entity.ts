import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Person } from '../../person/schema/person.entity';

@Entity()
export class Account{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    institutionalEmail: string;

    @Column()
    password: string;

    @Column({ default: true })
    status: boolean;

    @OneToOne(() =>Person, (person:Person) => person.account)
    person: Person;

}
