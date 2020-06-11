const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema(
  {
    url: String,
    displayName: String
  },
  { timestamp: true }
);

const Link = mongoose.model('Link', linkSchema);

module.exports = {
  Link: Link
};
