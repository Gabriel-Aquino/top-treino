import IBaseDTO from 'shared/dtos/IBaseDTO';
import { BEntity } from 'shared/infra/typeorm/entities/BEntity';

/* eslint-disable no-unused-vars */
export default interface IBaseRepository<T extends IBaseDTO, A extends BEntity> {
    create(dtoEntity: T): Promise<A>;
    findAll(): Promise<A[]>;
    findById(id: string): Promise<A | undefined>;
    findByName(name: string): Promise<A | undefined>;
    remove(id: string): Promise<void>;
    save(entity: A): Promise<A>;
}
