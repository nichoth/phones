# phones 

> Parse, format, and validate US phone numbers


## Install

```
$ npm install telephone-stuff
```


## Usage

```js
var phones = require('telephone-stuff')

phones.parse('415-555-12345')
//=> 4155551234

phones.parse('123-123-12345', { truncate: false })
//=> 12312312345

phones.format('4155551234')
//=> 415-555-1234

phones.format('1231231234', '.')
//=> 123.123.1234

phones.validate('1231231234')
//=> true
```

## API

#### `phones.parse(phone)` -> `string`

##### phone

*Required*  
Type: `string`

A phone number to parse. A leading `1` country code will be stripped.

#### `phones.format(phone, [separator])` -> `string`

Format a 10 digit phone string by adding separators and truncating extra digits.

##### phone

*Required*  
Type: `string`

A phone number to format. Digits only.

##### separator

Type: `string`  
Default: `'-'`

#### `phones.validate(phone)` -> `boolean`
Returns false if `phone` is not a string with exactly 10 digits.

#### phone

*Required*  
Type: `string`

A phone number to validate as a 10 digit string.

-------------

Forked from bendrucker/phones
