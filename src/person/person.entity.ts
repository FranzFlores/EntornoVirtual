import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName1: string;

    @Column()
    firstName2: string;

    @Column()
    lastName1: string;

    @Column()
    lastName2: string;

    @Column()
    dni: string;

    @Column()
    birthdate: Date;

    @Column()
    personalEmail: string;

    @Column()
    institutionalEmail: string;
    
    @Column()
    address: string;

    @Column()
    cellphone: string;

    @Column()
    maritalStatus: string;

    @Column()
    status: boolean;
}