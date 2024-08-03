import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
