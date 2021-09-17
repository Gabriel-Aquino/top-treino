import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import 'reflect-metadata';
import UpdateProfilesService from '../UpdateProfilesService';

describe('Update Profile Service', () => {
  let fakeProfileRepository: IProfilesRepository;
  let updateProfile: UpdateProfilesService;
  const createProfilesFactory = createProfileFactory.build();
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    updateProfile = new UpdateProfilesService(fakeProfileRepository);
  });

  it('should be able to update an profile changing active status only', async () => {
    const profile = await fakeProfileRepository.create({
      name: createProfilesFactory.name,
    });

    const updatedProfile = await updateProfile.execute({
      id: profile.id,
      is_active: false,
      name: profile.name,
    });

    expect(updatedProfile.id).toEqual(profile.id);
    expect(updatedProfile.is_active).toBe(false);
  });

  it('should be able to update an profile changing name only', async () => {
    const profile = await fakeProfileRepository.create({
      name: createProfilesFactory.name,
    });

    const updatedProfile = await updateProfile.execute({
      id: profile.id,
      is_active: true,
      name: `${createProfilesFactory.name}_updated`,
    });

    expect(updatedProfile.id).toEqual(profile.id);
    expect(updatedProfile.name).toBe(`${createProfilesFactory.name}_updated`);
  });
});
