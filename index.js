'use strict';

module.exports = {
  fromArray: function (geoArray) {
    return geoArray.reduce(function (soFar, current, index) {
      return soFar + current / Math.pow(60, index)
    }, 0)
  }
}
