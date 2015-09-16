'use strict'

var separate = require('separate')

exports.parse = parse
function parse (phone) {
  phone = phone.replace(/\D/g, '')
  return phone.charAt(0) === '1' ? phone.substring(1, phone.length) : phone
}

exports.format = function format (phone, separator) {
  separator = separator == null ? ' ' : separator
  return separate(phone, separator, [3, 6])
}

exports.validate = function validate (phone) {
  return /\d{10}/.test(phone)
}
