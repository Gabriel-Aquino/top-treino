import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';

let connection: Connection;

describe('Find One Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });
  it('should be able to find only one profile from database', async () => {
    const profileCreated = await request(app).post('/profiles/create_profile').send({
      name: 'Admin-integration-test-findById',
    });
    expect(profileCreated.body).toHaveProperty('id');

    const { id } = profileCreated.body;

    const response = await request(app).get(`/profiles/find_profile/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});
