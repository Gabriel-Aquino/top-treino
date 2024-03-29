import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';

let connection: Connection;

describe('Create Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });
  it('should be able to create a real profile', async () => {
    const createProfilesFactory = createProfileFactory.build();
    const response = await request(app).post('/profiles').send({
      name: createProfilesFactory.name,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});
