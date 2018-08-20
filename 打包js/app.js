// es6
import sum from './sum.js'
console.log('sum(3 + 5):', sum(3, 5))

// common.js
const minus = require('./minus.js')
console.log('minus(3 - 5):', minus(3, 5))

// AMD
require(['./multiply'], function(multi) {
  console.log('multiply(3, 5):', multi(3, 5))
})