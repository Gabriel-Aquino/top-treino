import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import {
  Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import { BEntity } from '../../../../../shared/infra/typeorm/entities/BEntity';

@Entity('users')
export class Users extends BEntity {
    @Column()
    full_name: string;

    @Column()
    email: string

    @Column()
    password: string;

    @Column()
    is_active: boolean

    @ManyToOne(() => Profiles)
    @JoinColumn({ name: 'profiles_id', referencedColumnName: 'id' })
    profile_id: Profiles;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
