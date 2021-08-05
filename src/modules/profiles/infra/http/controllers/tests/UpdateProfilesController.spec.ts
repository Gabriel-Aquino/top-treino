import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';

let connection: Connection;

describe('Update Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to update profiles from database', async () => {
    const profileToUpdate = await request(app).post('/profiles/create_profile').send({
      name: 'Admin-integration-test-creating',
    });

    expect(profileToUpdate.status).toBe(200);
    expect(profileToUpdate.body).toHaveProperty('id');

    const { id } = profileToUpdate.body;

    const profilesFound = await request(app).get(`/profiles/find_profile/${id}`);

    expect(profilesFound.status).toBe(200);
    expect(profilesFound.body).toHaveProperty('id');
    expect(profilesFound.body).toHaveProperty('name');
    expect(profilesFound.body).toHaveProperty('is_active');

    const response = await request(app).post('/profiles/update_profile').send({
      id: profilesFound.body.id,
      name: 'Admin-integration-test-update',
      is_active: profilesFound.body.is_active,
    });

    expect(response.status).toBe(200);
    expect(response.body.name).not.toBe(profileToUpdate.body.name);
  });
});
