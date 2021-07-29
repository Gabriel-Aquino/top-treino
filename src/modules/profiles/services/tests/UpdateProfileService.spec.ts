import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import CreateProfilesService from '../CreateProfilesService';
import UpdateProfilesService from '../UpdateProfilesService';

describe('Update Profile Service', () => {
  let fakeProfileRepository: IProfilesRepository;
  let createProfile: CreateProfilesService;
  let updateProfile: UpdateProfilesService;
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    createProfile = new CreateProfilesService(fakeProfileRepository);
    updateProfile = new UpdateProfilesService(fakeProfileRepository);
  });

  it('should be able to update an profile changing active status only', async () => {
    const profile = await fakeProfileRepository.create({
      name: 'Admin',
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
      name: 'Admin',
    });

    const updatedProfile = await updateProfile.execute({
      id: profile.id,
      is_active: true,
      name: 'Admin changed',
    });

    expect(updatedProfile.id).toEqual(profile.id);
    expect(updatedProfile.name).toBe('Admin changed');
  });
});
