const request = require('supertest');

const app = require('../../src/server');
const { postgresConn } = require('../../src/config');
const { PostModel } = require('../../src/models');

describe('PUT /posts/edit', () => {
    beforeAll(async () => {
        await postgresConn.sync();
        if (!PostModel.findByPk(99999))
            await PostModel.create({
                id: 999999,
                titulo: 'titulo de unit test',
                conteudo: 'post criado para unit test',
                autor: 'Unit Test',
            });
    });

    it('should return status 200 with the data from all posts and a message aswell', async () => {
        const response = await request(app).put('/posts/edit/99999').send({
            conteudo: 'post criado para unit test para edição',
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Successfully edited the post');
    });

    afterAll(async () => {
        await PostModel.destroy({ where: { id: 99999 } });
    });
});
