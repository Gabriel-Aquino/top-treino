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
    const profilesFound = await request(app).post('/profiles/find_profile').send({
      name: 'Admin',
    });

    expect(profilesFound.status).toBe(200);
    expect(profilesFound.body[0]).toHaveProperty('id');
    expect(profilesFound.body[0]).toHaveProperty('name');
    expect(profilesFound.body[0]).toHaveProperty('is_active');

    const response = await request(app).post('/profiles/update_profile').send({
      id: profilesFound.body[0].id,
      name: 'Admin-integration-test-update',
      is_active: profilesFound.body[0].is_active,
    });
  });
});
