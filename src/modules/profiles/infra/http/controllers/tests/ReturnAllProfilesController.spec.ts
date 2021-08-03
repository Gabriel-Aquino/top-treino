import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';

let connection: Connection;

describe('Find All Profiles Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to find all profiles from database', async () => {
    const profileCreated = await request(app).post('/profiles/create_profile').send({
      name: 'Admin-integration-test-returnAll',
    });
    expect(profileCreated.body).toHaveProperty('id');

    const response = await request(app).get('/profiles/all_profiles').send();

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });
});
