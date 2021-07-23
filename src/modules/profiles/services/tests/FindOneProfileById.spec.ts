import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import CreateProfilesService from '../CreateProfilesService';
import FindOneProfileByIdService from '../FindOneProfileByIdService';

describe('FindOneProfile', () => {
  it('should be able to find one profile by id', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const findOneProfileById = new FindOneProfileByIdService(fakeProfilesRepository);
    const profile = await fakeProfilesRepository.create({
      name: 'Admin',
    });

    const profileFound = await findOneProfileById.execute(profile.id);

    expect(profileFound?.id).toEqual(profile.id);
  });

  it('should be not able to find one profile if id is not sended', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const findOneProfileById = new FindOneProfileByIdService(fakeProfilesRepository);

    await expect(
      findOneProfileById.execute(''),
    ).rejects.toBeInstanceOf(Error);
  });
});