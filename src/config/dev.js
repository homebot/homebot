const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    urlSchema: 'http',
    host: 'localhost',
    port: 9000
  },
  database: {
    url: `mongodb://${host}/node-express-skeleton-dev`,
    properties: {
      useNewUrlParser: true
    }
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpireInMinutes: 1440
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  },
  mqtt:{
    host: 'm20.cloudmqtt.com',
    username: 'tzckmnaz',
    password: 'f3T-Qz3iPSUn',
    port: 18758
  }
};
