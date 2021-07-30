import 'reflect-metadata';
import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import {
  Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import { BEntity } from '@shared/infra/typeorm/entities/BEntity';

@Entity('users')
export class Users extends BEntity {
    @Column()
    full_name: string;

    @Column()
    email: string

    @Column()
    password: string;

    @ManyToOne(() => Profiles)
    @JoinColumn({ name: 'profiles_id', referencedColumnName: 'id' })
    profile_id: Profiles;
}
