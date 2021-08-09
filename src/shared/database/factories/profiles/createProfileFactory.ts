import * as Factory from 'factory.ts';
import { v4 as uuid } from 'uuid';
import faker from 'faker';
import { IProfileFactoryDTO } from './dtos/IProfileFactoryDTO';

const createProfileFactory = Factory.Sync.makeFactory<IProfileFactoryDTO>({
  id: uuid(),
  name: faker.hacker.noun(),
  is_active: true,
});

export { createProfileFactory };
