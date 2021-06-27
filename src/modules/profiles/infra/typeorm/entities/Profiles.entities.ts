/* eslint-disable no-useless-constructor */
import { Users } from 'modules/users/infra/typeorm/entities/Users.entities';
import { BEntity } from 'shared/infra/typeorm/entities/BEntity';
import {
  Column, Entity, ManyToOne,
} from 'typeorm';

  @Entity('users')
export class Profiles extends BEntity {
      @Column()
      name: string;

      @Column()
      is_active: boolean;

      @Column()
      created_at: Date;

      @Column()
      updated_at: Date;

      @ManyToOne(() => Users, (users) => users.profile_id)
      user: Users

      constructor(id: string) {
        super(id);
      }
}
