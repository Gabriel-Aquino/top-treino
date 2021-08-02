import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import ReturnAllProfilesService from '../ReturnAllProfilesService';

describe('Return all Registered Profiles', () => {
  it('should be able to return all registered profiles', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const returnAllProfiles = new ReturnAllProfilesService(fakeProfilesRepository);
    const profile1 = await fakeProfilesRepository.create({
      name: 'Admin',
    });

    const profile2 = await fakeProfilesRepository.create({
      name: 'Professor',
    });

    const all = await returnAllProfiles.execute();
    expect(all).toContain(profile1);
    expect(all).toContain(profile2);
  });

  it('should not be able to return all registered profiles is a name is not provided', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const returnAllProfiles = new ReturnAllProfilesService(fakeProfilesRepository);
    await expect(
      returnAllProfiles.execute(),
    ).rejects.toBeInstanceOf(AppError);
  });
});
