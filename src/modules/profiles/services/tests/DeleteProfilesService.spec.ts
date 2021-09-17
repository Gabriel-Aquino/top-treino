import AppError from '@shared/errors/AppError';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '../../repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import DeleteProfilesService from '../DeleteProfilesService';

describe('DeleteProfiles', () => {
  let fakeProfileRepository: IProfilesRepository;
  let deleteProfile: DeleteProfilesService;
  const createProfilesFactory = createProfileFactory.build();
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    deleteProfile = new DeleteProfilesService(fakeProfileRepository);
  });
  it('should be able to delete a profile', async () => {
    const profile = await fakeProfileRepository.create({
      name: createProfilesFactory.name,
    });

    const deletedProfile = await deleteProfile.execute({
      id: profile.id,
    });

    expect(deletedProfile.is_active).toBe(false);
    expect(deletedProfile.id).toEqual(profile.id);
  });

  it('should be not able to delete a non-existent profile', async () => {
    await expect(
      deleteProfile.execute({
        id: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
