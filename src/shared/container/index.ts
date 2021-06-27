import IProfilesRepository from 'modules/profiles/repositories/dtos/IProfilesRepository';
import ProfilesRepository from 'modules/profiles/repositories/ProfilesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IProfilesRepository>('ProfilesRepository', ProfilesRepository);
