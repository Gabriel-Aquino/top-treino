import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import { Connection } from 'typeorm';
import connect from '@shared/infra/typeorm';

let connection: Connection;

describe('Delete Profile Controller', () => {
  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    await connection.close();
  });
  it('should be able to delete/deactivate a profile from database', async () => {
    const profileCreated = await request(app).post('/profiles/create_profile').send({
      name: 'Admin-integration-test-deleting',
    });
    expect(profileCreated.body).toHaveProperty('id');

    const { id } = profileCreated.body;
    const response = await request(app).delete('/profiles/delete_profile').send({
      // id selected from database, chosen after CreateProfile integration test running
      id,
    });

    const { is_active } = response.body;
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('is_active');
    expect(is_active).toBe(false);
  });
});
