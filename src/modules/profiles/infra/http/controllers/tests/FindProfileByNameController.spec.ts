import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';

let connection: Connection;

describe('Find One Profile By Name Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to find profiles by name from database', async () => {
    const profileCreated = await request(app).post('/profiles/create_profile').send({
      name: 'Admin-integration-test-findByName',
    });
    expect(profileCreated.body).toHaveProperty('id');

    const response = await request(app).post('/profiles/find_profile').send({
      name: 'Admin',
    });

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });
});
