'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ShortId = require('../utils').generateId;
var slug = require('mongoose-slug');
var timestamps = require('mongoose-timestamp');

var OrganizationSchema = new Schema({
  _id: {type: String, unique: true, default: ShortId},
  name: {type: String},
  description: String,
  country: String,
  phone: String,
  image: {file: String, url: String},
  tags:[{_id: {type: String, default: ShortId}, name: String}],
  isActive: {type: Boolean, default: false},
  startDate: Date,
  expireDate: Date,
  campuses: [{type: String, ref: 'Campus'}]
});

OrganizationSchema.plugin(slug('name'));
OrganizationSchema.plugin(timestamps);


module.exports = mongoose.model('Organization', OrganizationSchema);
