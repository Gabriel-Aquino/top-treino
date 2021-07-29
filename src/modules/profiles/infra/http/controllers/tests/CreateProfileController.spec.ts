import 'reflect-metadata';
import request from 'supertest';
import { app } from '@shared/infra/http/app';

jest.useFakeTimers();
describe('Create Profile Controller', () => {
  it('should be able to create a real profile', async () => {
    const response = await request(app).post('/users').send({
      name: 'Admin',
    });

    expect(response.status).toBe(200);
  });
});
