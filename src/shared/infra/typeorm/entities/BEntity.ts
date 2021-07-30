import 'reflect-metadata';
import { PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

export class BEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    is_active: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
      if (!this.is_active) {
        this.is_active = true;
      }
    }
}
