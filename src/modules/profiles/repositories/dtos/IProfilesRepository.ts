/* eslint-disable no-unused-vars */
import IProfilesDTO from '@modules/profiles/dtos/IProfilesDTO';
import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import IBaseRepository from '@shared/repositories/dtos/IBaseRepository';

interface IProfilesRepository extends IBaseRepository<IProfilesDTO, Profiles> {

}

export default IProfilesRepository;
