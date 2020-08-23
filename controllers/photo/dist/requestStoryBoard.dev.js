"use strict";

var _require = require('../../models'),
    Photo = _require.Photo;

module.exports = {
  post: function post(req, res) {
    Photo.findAll({
      where: {
        userId: req.session.userid
      },
      order: [['createdAt', 'DESC']]
    }).then(function (photo) {
      // console.log(photo);
      res.status(200).send(photo);
    })["catch"](function (err) {
      return res.send(err);
    });
  }
};