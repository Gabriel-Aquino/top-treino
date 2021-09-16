import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';

let connection: Connection;

describe('Update Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to update profiles from database', async () => {
    const createProfilesFactory = createProfileFactory.build();
    const profileToUpdate = await request(app).post('/profiles').send({
      name: createProfilesFactory.name,
    });

    expect(profileToUpdate.status).toBe(200);
    expect(profileToUpdate.body).toHaveProperty('id');

    const { id } = profileToUpdate.body;

    const profilesFound = await request(app).get(`/profiles/findById/${id}`);

    expect(profilesFound.status).toBe(200);
    expect(profilesFound.body).toHaveProperty('id');
    expect(profilesFound.body).toHaveProperty('name');
    expect(profilesFound.body).toHaveProperty('is_active');

    const response = await request(app).put('/profiles').send({
      id: profilesFound.body.id,
      name: `${createProfilesFactory.name}_updated`,
      is_active: profilesFound.body.is_active,
    });

    expect(response.status).toBe(200);
    expect(response.body.name).not.toBe(profileToUpdate.body.name);
  });
});
