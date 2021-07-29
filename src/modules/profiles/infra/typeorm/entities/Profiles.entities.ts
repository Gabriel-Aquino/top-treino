import {
  Column, Entity,
} from 'typeorm';
import 'reflect-metadata';
import { BEntity } from '@shared/infra/typeorm/entities/BEntity';

  @Entity('profile')
export class Profiles extends BEntity {
      @Column()
      name: string;

      @Column()
      is_active: boolean;

      @Column('timestamp')
      created_at: Date;

      @Column('timestamp')
      updated_at: Date;
}
