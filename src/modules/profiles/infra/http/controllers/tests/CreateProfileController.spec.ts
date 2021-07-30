import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { Connection, getConnection } from 'typeorm';

let connection: Connection;

describe('Create Profile Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    const myConnection = getConnection();
    // await connection.close();
    await myConnection.close();
  });
  it('should be able to create a real profile', async () => {
    const response = await request(app).post('/profiles').send({
      name: 'Admin-integration-test',
    });

    expect(response.status).toBe(200);
  });
});
