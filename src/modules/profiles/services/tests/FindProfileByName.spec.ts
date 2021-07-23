import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import FindProfileByNameService from '../FindProfileByNameService';

describe('FindProfileByName', () => {
  it('should able to find one or more profile by name', async () => {
    const fakeProfilesRepository = new FakesProfilesRepository();
    const findProfileByName = new FindProfileByNameService(fakeProfilesRepository);

    const profile = await fakeProfilesRepository.create({
      name: 'Admin',
    });

    const profileName = await findProfileByName.execute(profile.name);

    expect(profileName).toBeInstanceOf(Array);
  });
});
