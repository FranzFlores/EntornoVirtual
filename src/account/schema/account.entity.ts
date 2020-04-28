import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Person } from 'src/person/schema/person.entity';

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

    @OneToOne(() => Person, (person: Person) => person.account)
    @JoinColumn()
    person: Person;

}
