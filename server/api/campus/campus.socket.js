/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Campus = require('./campus.model');

exports.register = function(socket) {
  Campus.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Campus.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('campus:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('campus:remove', doc);
}