var html = require('choo/html')
var format = require('../components/format')

module.exports = view

function view (state, emit) {
  return html`
    <div class="x xw xjc c12 p1 fs2">
      Page not found
    </div>
  `
}
