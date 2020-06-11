const mongoose = require('mongoose');
const { Link } = require('./models/link.js');
const { Bio } = require('./models/bio.js');
const fs = require('fs'), filename = '/data/about/bio.txt';

async function initDb() {
  mongoose.connect('mongodb://127.0.0.1/website', { useNewUrlParser: true })
  mongoose.connection.on('error', console.error.bind(console, 'MongodDB connection error:'));
  if (!getBio()) {
    Bio({
      defaultId: 1,
      about: await fs.readFileSync(__dirname + filename, 'utf8')
    }).save();
  }
}

function getWithErr(model, obj) {
  model.find(obj, (err, res) => {
    if (err)
      throw err;
  });
}

function getLinks() {
  getWithErr(Link, {});
}

function getBio() {
  getWithErr(Bio, { defaultId: 1 });
}

module.exports = {
  initDb: initDb,
  getLinks: getLinks,
  getBio: getBio
};
