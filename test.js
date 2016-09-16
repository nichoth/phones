'use strict'

var test = require('tape')
var phone = require('./')

test('parse', function (t) {
  var parse = phone.parse
  t.equal(parse('415-555-1234'), '4155551234')
  t.equal(parse('+1-415-555-1234'), '4155551234')
  t.equal(parse('415-555-12349'), '4155551234', 'truncate')
  t.equal(parse('1234567891234', {truncate: false}), '1234567891234',
    'dont truncate')
  t.end()
})

test('format', function (t) {
  var format = phone.format
  t.equal(format('4155551234'), '415-555-1234')
  t.equal(format('4155551234', '.'), '415.555.1234')

  t.equal(format('4155551234999'), '415-555-1234', 'truncate')
  t.equal(format('14155551234'), '1-415-555-1234', 'country code')
  t.equal(format('14155551234999'), '1-415-555-1234', 'country code + truncate')

  t.end()
})

test('validate', function (t) {
  var validate = phone.validate
  t.ok(validate('4155551234'))
  t.notOk(validate('415-555-1235'))
  t.end()
})
