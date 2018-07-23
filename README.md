# ultimate-string-replace

[![Build Status](https://travis-ci.org/vlaraort/ultimate-string-replace.svg?branch=master)](https://travis-ci.org/vlaraort/ultimate-string-replace)
[![Code Coverage](https://codecov.io/gh/vlaraort/ultimate-string-replace/branch/master/graph/badge.svg)](https://codecov.io/gh/vlaraort/ultimate-string-replace/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![dependencies](https://david-dm.org/vlaraort/ultimate-string-replace.svg)](https://david-dm.org/vlaraort/ultimate-string-replace)

Helper to allow to find and wrap matches in a string.

It's main purpose is to be used in filters of objects, so you can highlight matches.

If the string has accents, ultimate-string-replace will get rid of them and match anyway.

If the string to match has accents, it will only match exact matches (case-insensitive).


## Install

`npm i -S ultimate-string-replace`

## Usage

```
import ultimateStringReplace from 'ultimate-string-replace';

const data = "Crème brûlée"
const response = ultimateStringReplace(data, "rème brûlée", {'wrap_preffix': "<b>", 'wrap_suffix': "</b>" })
// Result -> 'C<b>rème brûlée</b>';
```
## Examples of matches

| Matcher | Input | Output |
| ------------- | ------------- |------------- |
| `he`  | `Hello hello`  | `<b>He</b>llo <b>he</b>llo`  |
| `23`  | `12 34`  | `1<b>2 3</b>4`  |
| `rème brûlée`  | `Crème brûlée`  | `C<b>rème brûlée</b>`  |
| `ví`  | `Víctor victor Victor`  | `<b>Ví</b>ctor victor Victor`  |
| `Ví`  | `Víctor victor Victor`  | `<b>Ví</b>ctor victor Victor`  |
| `no`  | `Víctor victor Victor`  | `false`  |

* If you have doubts, check the tests.

## Running the tests

`npm run test`

## Build the application

`npm run build`

ultimate-string-replace is written as an ES6 module, but it also gets transpiled to ES5.

## Contributing

PR Welcome!
