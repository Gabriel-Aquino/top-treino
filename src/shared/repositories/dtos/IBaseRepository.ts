import { BEntity } from '@shared/infra/typeorm/entities/BEntity';

interface IBaseRepository<BaseDTO, A extends BEntity> {
  create(dtoEntity: BaseDTO): Promise<A>;
  findAll(): Promise<A[]>;
  findById(id: string): Promise<A | undefined>;
  findByName(name: string): Promise<A[] | undefined>;
  // remove(id: string): Promise<void>;
  save(entity: A): Promise<A>;
}

export default IBaseRepository;
