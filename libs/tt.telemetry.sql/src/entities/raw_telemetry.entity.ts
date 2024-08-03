import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('raw_telemetries')
export class RawTelemetry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    timestamp: Date;
}
