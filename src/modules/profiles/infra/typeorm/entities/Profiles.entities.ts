import 'reflect-metadata';
import {
  Column, Entity,
} from 'typeorm';
import { BEntity } from '@shared/infra/typeorm/entities/BEntity';

  @Entity('profile')
export class Profiles extends BEntity {
      @Column()
      name: string;
}
