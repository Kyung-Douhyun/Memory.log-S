"use strict";

var _require = require('../../models'),
    Photo = _require.Photo;

module.exports = {
  post: function post(req, res) {
    var _req$body = req.body,
        filepath = _req$body.filepath,
        description = _req$body.description;
    Photo.update({
      description: description
    }, {
      where: {
        filepath: filepath
      }
    }).then(function () {
      return Photo.findOne({
        where: {
          filepath: filepath
        }
      }).then(function (photo) {
        return res.status(200).send(photo);
      })["catch"](function (err) {
        return res.status(500).send(err);
      });
    })["catch"](function (err) {
      return res.status(500).send(err);
    });
  }
}; ///// gitmoji test