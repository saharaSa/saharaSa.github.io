const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Location = new Schema({
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model("lt_locations", Location);