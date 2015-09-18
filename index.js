'use strict'

var separate = require('separate')

exports.parse = parse
function parse (phone) {
  phone = phone.replace(/\D/g, '')
  return phone.charAt(0) === '1' ? phone.substring(1, phone.length) : phone
}

exports.format = function format (phone, separator) {
  separator = separator == null ? '-' : separator

  var country = phone.charAt(0) === '1'
  phone = phone.substring(0, country ? 11 : 10)

  var separators = country ? [1, 4, 7] : [3, 6]

  return separate(phone, separator, separators)
}

exports.validate = function validate (phone) {
  return /\d{10}/.test(phone)
}
