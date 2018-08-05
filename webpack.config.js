const devConf = require('./webpack.development.config');
const prodConf = require('./webpack.production.config');

module.exports = (env, args) => {
    if (args.mode === 'development') {
        console.log('Development mode');
        return devConf.config;
    }
    if (args.mode === 'production') {
        console.log('Production mode');
        return prodConf.config;
    }
};