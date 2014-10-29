'use strict';

var expect = require('chai').expect;
var Phone  = require('../src/phone');

describe('Phone', function () {

  var phone;
  beforeEach(function () {
    phone = new Phone('2125551234');
  });

  describe('Constructor', function () {

    it('stores the raw input', function () {
      expect(phone.raw).to.equal('2125551234');
    });

  });

  describe('#isE164', function () {

    it('requires a plus', function () {
      expect(phone).isE164()).to.be.false;
      expect(new Phone('+12125551234').isE164()).to.be.true;
    });

    it('cannot have non numeric characters after the plus', function () {
      expect(new Phone('+1 212'));
    });

    it('cannot be shorter than 10 digits', function () {
      expect(new Phone('+1212').isE164()).to.be.false;
    });

    it('cannot be longer than 15 digits', function () {
      expect(new Phone('+1212555123456789'))
    });

  });

});
