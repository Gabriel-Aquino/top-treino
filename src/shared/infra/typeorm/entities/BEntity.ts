import { PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

export class BEntity {
    @PrimaryColumn()
    id: string;

    constructor(id: string) {
      if (!id) {
        this.id = uuid();
      } else {
        this.id = id;
      }
    }
}
