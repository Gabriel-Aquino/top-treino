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
  it('should be able to find only one real profile', async () => {
    /* const response = await request(app).post(`/profiles/${id}`).send({
      name: 'Admin-integration-test',
    });

    expect(response.status).toBe(200); */
  });
});
