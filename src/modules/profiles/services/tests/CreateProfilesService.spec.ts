import FakesProfilesRepository from '../../repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import CreateProfilesService from '../CreateProfilesService';

describe('CreateProfiles', () => {
  it('should be able to create a new profile', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const createProfile = new CreateProfilesService(fakeProfilesRepository);

    const profile = await createProfile.execute({
      name: 'Admin',
    });

    expect(profile).toHaveProperty('id');
  });
});
