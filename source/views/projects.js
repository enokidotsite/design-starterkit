var html = require('choo/html')
var ov = require('object-values')
var xt = require('xtend')

var thumbnail = require('../components/thumbnail')
var methodsPages = require('../methods/pages')

module.exports = projects

function projects (state, emit) {
  var entries = methodsPages.pages(state.content, state.page.pages)

  return html`
    <div class="p1 x xw sm-mt4">
      ${entries.map(thumbnail)}
    </div>
  `
}
