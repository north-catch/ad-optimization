const prpl = require('prpl-server');

module.exports = prpl.makeHandler('./build', require('../build/polymer.json'));
