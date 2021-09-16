import IUsersDTO from '@modules/users/dtos/IUsersDTO';
import { Users } from '@modules/users/infra/typeorm/entities/Users.entities';
import IBaseRepository from '@shared/repositories/dtos/IBaseRepository';

interface IUsersRepository extends IBaseRepository<IUsersDTO, Users>{

}

export default IUsersRepository;
