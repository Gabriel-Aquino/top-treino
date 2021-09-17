import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import AppError from '@shared/errors/AppError';
import FindOneProfileByIdService from '../FindOneProfileByIdService';

describe('FindOneProfile', () => {
  let fakeProfileRepository: IProfilesRepository;
  let findOneProfileById: FindOneProfileByIdService;
  const createProfilesFactory = createProfileFactory.build();
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    findOneProfileById = new FindOneProfileByIdService(fakeProfileRepository);
  });
  it('should be able to find one profile by id', async () => {
    const profile = await fakeProfileRepository.create({
      name: createProfilesFactory.name,
    });

    const profileFound = await findOneProfileById.execute({ id: profile.id });

    expect(profileFound?.id).toEqual(profile.id);
  });

  it('should be not able to find one profile if id is not sended', async () => {
    await expect(
      findOneProfileById.execute({ id: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
