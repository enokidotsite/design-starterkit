/**
 * Note:
 * This design does not yet use the page method!
 */
var choo = require('choo')
var app = choo()
require('./design')

// create your app
app.use(require('./plugins/scroll'))
app.use(require('enoki/choo')())

// error route
app.route('*', require('./components/wrapper'))

// initialize
if (!module.parent) app.mount('body')
else module.exports = app
