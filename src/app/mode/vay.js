const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vay = new Schema({
    name: {type : String},
    img: {type : String},
    Gia: {type : String},
    STT: {type : String},
    slug: {type : String},
    img_phu1: {type : String},
    img_phu2: {type : String}

  
  });

  module.exports = mongoose.model('Vay', Vay);