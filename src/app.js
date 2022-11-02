import express from 'express';
import cors from 'cors';
import path from 'path';
import { ExpressDataApplication, serviceRouter } from '@themost/express';

function getApplication() {
    // init app
    const app = express();
    // https://github.com/expressjs/cors#usage
    app.use(cors());

    // https://expressjs.com/en/guide/using-template-engines.html
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, 'views'));

    const dataAppication = new ExpressDataApplication(path.resolve(__dirname, 'config'));
    app.set(ExpressDataApplication, dataAppication);
    app.use(dataAppication.middleware(app));

    app.use('/api/', serviceRouter);

    app.get('/', (req, res) => {
        return res.render('index');
    });

    // and return
    return app;
}

export {
    getApplication
}