import 'reflect-metadata';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import AppError from '@shared/errors/AppError';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import FindProfileByNameService from '../FindProfileByNameService';

describe('FindProfileByName', () => {
  it('should able to find one or more profile by name', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const findProfileByName = new FindProfileByNameService(fakeProfilesRepository);
    const createProfilesFactory = createProfileFactory.build();
    const profile = await fakeProfilesRepository.create({
      name: createProfilesFactory.name,
    });

    const profileName = await findProfileByName.execute(profile.name);

    expect(profileName).toContain(profile);
  });

  it('should be not able to find one profile if name not exists', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const findProfileByName = new FindProfileByNameService(fakeProfilesRepository);
    await expect(
      findProfileByName.execute('non-existing-profile-name'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
