/* eslint-disable no-useless-constructor */
import { Profiles } from 'modules/profiles/infra/typeorm/entities/Profiles.entities';
import { BEntity } from 'shared/infra/typeorm/entities/BEntity';
import {
  Column, Entity, OneToMany,
} from 'typeorm';

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

    @OneToMany(() => Profiles, (profiles) => profiles.user)
    profile_id: Profiles[];

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor(id: string) {
      super(id);
    }
}
