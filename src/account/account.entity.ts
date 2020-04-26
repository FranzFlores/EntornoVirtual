import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    institutionalEmail: string;

    @Column()
    password: string;

    @Column({ default: true })
    status: boolean;

    @OneToOne(type =>Person, person => person.account)
    person: Person;

}
