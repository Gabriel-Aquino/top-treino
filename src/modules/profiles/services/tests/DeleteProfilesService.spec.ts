import AppError from '@shared/errors/AppError';
import FakesProfilesRepository from '../../repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import DeleteProfilesService from '../DeleteProfilesService';

describe('DeleteProfiles', () => {
  it('should be able to delete a profile', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();

    const profile = await fakeProfilesRepository.create({
      name: 'Admin',
    });

    const deleteProfile = new DeleteProfilesService(fakeProfilesRepository);

    const deletedProfile = await deleteProfile.execute({
      id: profile.id,
    });

    expect(deletedProfile.is_active).toBe(false);
    expect(deletedProfile.id).toEqual(profile.id);
  });

  it('should be not able to delete a non-existent profile', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();

    const deleteProfile = new DeleteProfilesService(fakeProfilesRepository);

    await expect(
      deleteProfile.execute({
        id: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
