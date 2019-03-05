// Example model
const uniqid = require('uniqid');

function Article (opts) {
  if(!opts) opts = {};
  this.id = uniqid();
  this.title = opts.title || '';
  this.text = opts.text || '';
  this.img = opts.img || false;
}

module.exports = Article;

