const request = require('supertest');

const app = require('../../src/server');
const { postgresConn } = require('../../src/config');
const { PostModel } = require('../../src/models');

describe('POST /posts/create', () => {
    beforeAll(async () => {
        await postgresConn.sync();
        await PostModel.create({
            id: 99999,
            titulo: 'titulo de unit test',
            conteudo: 'post criado para unit test',
            autor: 'Unit Test',
        });
    });

    it('should return status 200 with the data from all posts and a message aswell', async () => {
        const response = await request(app).delete('/posts/delete/99999');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Successfully deleted the post');
    });

    afterAll(async () => {});
});
