require('dotenv').config();
const path = require('path');
const fs = require('fs');

module.exports = {
  auth:{},
  db: {
    host: '127.0.0.1',
    port: 5432,
    database: 'challenge',
    type: 'postgres',
  },
  debug: {
    stackSize: 4,
  },
  i18next: {
    translationFilePath: path.resolve(__dirname, '..', 'locales/{{lng}}/{{ns}}.json'),
  },
  host: 'localhost:9001',
  https: {
    enabled: true,
    key: fs.readFileSync('./certs/test-key.key'),
    cert: fs.readFileSync('./certs/test-cert.pem'),
  },
  port: process.env.PORT || 9001,
  shutdown: {
    appKill: 1000,
    serverClose: 100,
  },
  openid:{
    authRequired: true,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  }
};
