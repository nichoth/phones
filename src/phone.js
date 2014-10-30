'use strict';

function Phone (raw) {
  this.raw = raw;
}

Phone.prototype.strip = function () {
  return this.raw.replace(/\D/g, '');
};

Phone.prototype.isE164 = function () {
  return /^\+\d{10,15}$/.test(this.raw);
};

Phone.prototype.toE164 = function () {
  var stripped = this.strip();
  if (stripped.length === 10) {
    return '+1' + stripped;
  }
  else {
    return '+' + stripped;
  }
};

Phone.prototype.toString = function () {
  return this.toE164();
};

module.exports = Phone;
