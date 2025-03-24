const request = require('supertest');

const app = require('../../src/server');
const { postgresConn } = require('../../src/config');

describe('GET /posts', () => {
    beforeAll(async () => {
        await postgresConn.sync();
    });

    it('should return status 200 with the data from all posts and a message aswell', async () => {
        const response = await request(app).get('/posts/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Successfully pulled all posts');
    });
});
