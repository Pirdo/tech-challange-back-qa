require('dotenv').config();

const app = require('./server');
// const sequelize = require('./src/config/postgres');
const port = process.env.PORT || 3000;

const { logger } = require('./utils');

app.listen(port, () => {
    logger.info(`Application running on port ${port}`);
    // sequelize
    //     .authenticate()
    //     .then(() => {
    //         logger.info(`Application running on port ${port}`);
    //     })
    //     .catch((err) => {
    //         logger.error(err);
    //     });
});
