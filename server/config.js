var environement = process.env.NODE_ENV || 'dev';

module.exports = require('../config/' + environement);