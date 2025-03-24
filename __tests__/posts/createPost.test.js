const request = require('supertest');

const app = require('../../src/server');
const { postgresConn } = require('../../src/config');
const { PostModel } = require('../../src/models');

describe('POST /posts/create', () => {
    beforeAll(async () => {
        await postgresConn.sync();
    });

    it('should return status 200 with the data from all posts and a message aswell', async () => {
        const response = await request(app).post('/posts/create').send({
            id: 99999,
            titulo: 'titulo de unit test',
            conteudo: 'post criado para unit test',
            autor: 'Unit Test',
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Successfully created a new post');
    });

    afterAll(async () => {
        await PostModel.destroy({ where: { id: 99999 } });
    });
});
