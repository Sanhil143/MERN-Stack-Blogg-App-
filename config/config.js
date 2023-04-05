const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

let config = {};
    
// Application Environment 
const appEnv = process.env.APP_ENV;

// Get document, or throw exception on error
try {
  config = yaml.load(
    fs.readFileSync(path.join(__dirname, "config.yml"), "utf8")
  );
} catch (e) {
  console.log(e);
} 

const { protocol, host, port } = config.app[appEnv];
// const { protocol, host, port, api_prefix } = config.app[appEnv];

module.exports = {
  dbConfig: config.db[appEnv],
  appConfig: {
    ...config.app[appEnv],
    baseAPIEndpoint: `${protocol}://${host}:${port}`, 
  },
};


// mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/test

// "postinstall": "cp ./config/config.yml.sample ./config/config.yml && cp ./config/.env.sample ./config/.env"