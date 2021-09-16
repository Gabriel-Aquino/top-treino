import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';

let connection: Connection;

describe('Find All Profiles Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to find all profiles from database', async () => {
    const createProfilesFactory = createProfileFactory.build();
    const profileCreated = await request(app).post('/profiles').send({
      name: createProfilesFactory.name,
    });
    expect(profileCreated.body).toHaveProperty('id');

    const response = await request(app).get('/profiles').send();

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });
});
