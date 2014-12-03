'use strict';

var _ = require('lodash');
var Campus = require('./campus.model');

// Get list of campuss
exports.index = function(req, res) {
  Campus.find(function (err, campuss) {
    if(err) { return handleError(res, err); }
    return res.json(200, campuss);
  });
};

// Get a single campus
exports.show = function(req, res) {
  Campus.findById(req.params.id, function (err, campus) {
    if(err) { return handleError(res, err); }
    if(!campus) { return res.send(404); }
    return res.json(campus);
  });
};

// Creates a new campus in the DB.
exports.create = function(req, res) {
  Campus.create(req.body, function(err, campus) {
    if(err) { return handleError(res, err); }
    return res.json(201, campus);
  });
};

// Updates an existing campus in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Campus.findById(req.params.id, function (err, campus) {
    if (err) { return handleError(res, err); }
    if(!campus) { return res.send(404); }
    var updated = _.merge(campus, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, campus);
    });
  });
};

// Deletes a campus from the DB.
exports.destroy = function(req, res) {
  Campus.findById(req.params.id, function (err, campus) {
    if(err) { return handleError(res, err); }
    if(!campus) { return res.send(404); }
    campus.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}