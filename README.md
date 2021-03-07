An Identicolor is a visual representation of a hash value, usually of an IP address, that serves to identify a user of a computer system as a form of RGB color model while protecting the user's privacy.

## Installation

#### NPM

```console
$ npm i Installation
```

#### Yarn

```console
$ yarn add Installation
```

#### Usage

```js
const identicolor = require('identicolor') // es5
import identicolor from 'identicolor' // es6

const [red, green, blue] = identicolor('Hello World')
// [ 49, 48, 102 ]
```
