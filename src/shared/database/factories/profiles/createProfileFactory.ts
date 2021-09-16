import * as Factory from 'factory.ts';
import faker from 'faker';
import { IProfileFactoryDTO } from './dtos/IProfileFactoryDTO';

const createProfileFactory = Factory.Sync.makeFactory<IProfileFactoryDTO>({
  name: faker.hacker.noun(),
});

export { createProfileFactory };
