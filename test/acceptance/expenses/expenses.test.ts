import { Api } from '../utils/api';

describe('Expenses Usage Acceptance Test', () => {
    describe('get-expenses api test', () => {
        it('should return a list of expenses', async () => {
            const response = await Api.get('/expenses/v1/get-expenses/');
            expect(response.status).toBe(200);
            expect(response.body.pagination).toStrictEqual({
                skip: 0,
                take: 10
            });
            expect(response.body.sortings).toStrictEqual({
                order:{}
            });
            expect(response.body.filters).toStrictEqual({
                where:{}
            });
        });

        it('should return a list of expenses limited and starting from a specific page', async () => {
            const response = await Api.get('/expenses/v1/get-expenses?page=1&limit=2');
            expect(response.status).toBe(200);
            expect(response.body.expenses).toHaveLength(2)
            expect(response.body.pagination).toStrictEqual({
                skip: 2,
                take: 2
            });
            expect(response.body.sortings).toStrictEqual({
                order:{}
            });
            expect(response.body.filters).toStrictEqual({
                where:{}
            });
        });

        it('should return a list of expenses where status is pending', async () => {
            const response = await Api.get('/expenses/v1/get-expenses?filter={"status":"pending"}');
            expect(response.status).toBe(200);
            expect(response.body.expenses).toEqual(
                expect.arrayContaining([
                  expect.objectContaining({status: "pending"}),
                ])
              );
            expect(response.body.pagination).toStrictEqual({
                skip: 0,
                take: 10
            });
            expect(response.body.sortings).toStrictEqual({
                order:{}
            });
            expect(response.body.filters).toStrictEqual({
                where:{
                    "status": "pending"
                }
            });
        });

        it('should return a list of expenses where user_id is da140a29-ae80-4f0e-a62d-6c2d2bc8a474', async () => {
            const response = await Api.get('/expenses/v1/get-expenses/da140a29-ae80-4f0e-a62d-6c2d2bc8a474');
            expect(response.status).toBe(200);
            expect(response.body.expenses).toEqual(
                expect.arrayContaining([
                  expect.objectContaining({user_id: "da140a29-ae80-4f0e-a62d-6c2d2bc8a474"}),
                ])
              );
            expect(response.body.pagination).toStrictEqual({
                skip: 0,
                take: 10
            });
            expect(response.body.sortings).toStrictEqual({
                order:{}
            });
            expect(response.body.filters).toStrictEqual({
                where:{
                    "user_id": "da140a29-ae80-4f0e-a62d-6c2d2bc8a474"
                }
            });
        });


        it('should return a list of expenses where user_id is da140a29-ae80-4f0e-a62d-6c2d2bc8a474 and status is pending', async () => {
            const response = await Api.get('/expenses/v1/get-expenses/da140a29-ae80-4f0e-a62d-6c2d2bc8a474?filter={"status":"pending"}');
            expect(response.status).toBe(200);
            expect(response.body.expenses).toEqual(
                expect.arrayContaining([
                  expect.objectContaining({user_id: "da140a29-ae80-4f0e-a62d-6c2d2bc8a474"}),
                  expect.objectContaining({status: "pending"}),
                ])
              );
            expect(response.body.pagination).toStrictEqual({
                skip: 0,
                take: 10
            });
            expect(response.body.sortings).toStrictEqual({
                order:{}
            });
            expect(response.body.filters).toStrictEqual({
                where:{
                    "user_id": "da140a29-ae80-4f0e-a62d-6c2d2bc8a474",
                    "status": "pending"
                }
            });
        });
    });
});