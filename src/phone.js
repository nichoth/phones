'use strict';

function Phone (raw) {
  this.raw = raw;
}

Phone.prototype.isE164 = function () {
  return /^\+\d{10,15}$/.test(this.raw);
}

module.exports = Phone;
