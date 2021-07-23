import FakesProfilesRepository from '../../repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import CreateProfilesService from '../CreateProfilesService';
import DeleteProfilesService from '../DeleteProfilesService';

describe('DeleteProfiles', () => {
  it('should be able to delete a profile', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const createProfile = new CreateProfilesService(fakeProfilesRepository);

    const profile = await createProfile.execute({
      name: 'Admin',
    });

    const deleteProfile = new DeleteProfilesService(fakeProfilesRepository);

    const deletedProfile = await deleteProfile.execute({
      id: profile.id,
    });

    expect(profile.is_active).toBe(false);
  });

  it('should be not able to delete a non-existent profile', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();

    const deleteProfile = new DeleteProfilesService(fakeProfilesRepository);

    await expect(
      deleteProfile.execute({
        id: '',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
