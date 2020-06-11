const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({
  about: String,
  defaultId: Number
});

const Bio = mongoose.model('Bio', bioSchema);

module.exports = {
  Bio: Bio
};
