import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';

let connection: Connection;

describe('Delete Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });
  it('should be able to delete/deactivate a profile from database', async () => {
    const createProfilesFactory = createProfileFactory.build();
    const profileCreated = await request(app).post('/profiles').send({
      name: createProfilesFactory.name,
    });
    expect(profileCreated.body).toHaveProperty('id');

    const { id } = profileCreated.body;
    const response = await request(app).delete(`/profiles/${id}`).send();

    const { is_active } = response.body;
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('is_active');
    expect(is_active).toBe(false);
  });
});
