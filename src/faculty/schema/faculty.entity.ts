import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Faculty{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    location:string;

    @Column({default:true})
    status:boolean;
}