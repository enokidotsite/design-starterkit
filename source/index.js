var choo = require('choo')
var app = choo()

// create your app
app.use(require('./plugins/scroll'))
app.use(require('choo-dat-hypha')())

// error route
app.route('*', require('./components/wrapper'))

// initialize
if (!module.parent) app.mount('body')
else module.exports = app
