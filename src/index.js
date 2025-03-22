require('dotenv').config();

const app = require('./server');
const { postgresConn } = require('./config');
const port = process.env.PORT || 3000;

const { logger } = require('./utils');

app.listen(port, () => {
    postgresConn
        .authenticate()
        .then(() => {
            logger.info('Connected to database');
            logger.info(`Application running on port ${port}`);
        })
        .catch((err) => {
            logger.error('There was an error while connecting to the database');
            logger.error(err);
        });
});
