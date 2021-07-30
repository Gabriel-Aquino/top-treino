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
  it('should be able to delete a real profile', async () => {
    /* const profiles = await request(app).get('/profiles').send({
      // id selected from database, chosen after CreateProfile integration test running
      id: '95a04770-c06a-4736-a8dd-308774da5f4b',
    });

    const response = await request(app).delete('/profiles').send({
    // id selected from database, chosen after CreateProfile integration test running
      id: '95a04770-c06a-4736-a8dd-308774da5f4b',
    });

    expect(response.status).toBe(200); */
  });
});
