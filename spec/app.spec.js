import { getApplication } from '../src/index';
import request from 'supertest';
import { ExpressDataApplication } from '@themost/express';
import { DataCacheStrategy, DataConfigurationStrategy } from '@themost/data';
describe('app', () => {
    /**
     * @type {import('express').Application}
     */
    let app;
    beforeAll(async () => {
        app = getApplication();
    });
    afterAll(async () => {
        /**
         * @type {import('@themost/express').ExpressDataApplication}
         */
        const dataApp = app.get(ExpressDataApplication);
        if (dataApp) {
            const cache = dataApp.getConfiguration().getStrategy(DataCacheStrategy);
            if (cache) {
                await cache.finalize();
            }
        }
    })
    it('should get index', async () => {
        const response = await request(app).get('/');
        expect(response.status).toEqual(200);
    });
    
});