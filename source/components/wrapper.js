var html = require('choo/html')
var ov = require('object-values')
var path = require('path')

var methodPages = require('../methods/pages')
var views = require('../views')

module.exports = wrapper

function wrapper (state, emit) {
  var pageIndex = state.content['/'] || { }
  var page = state.content[state.href || '/'] || { }
  var view = views[page.view || 'default']

  // extend state
  state.page = page

  return html`
    <body>
      <div class="c12 p1">
        ${title(pageIndex)}
        ${navigation({
          active: state.page ? state.page.url : '',
          content: state.content,
          pages: pageIndex.pages
        })}
      </div>
      ${state.site.loaded ? view(state, emit) : loading()}
      ${footer(state, emit)}
    </body>
  `
}

function title (state, emit) {
  return html` 
    <div class="c12 p1 fwb tac fs3 lh1">
      <a href="/" class="nbb">${state.title}</a>
    </div>
  `
}

function navigation (state, emit) {
  var active = state.active || ''
  var links = methodPages.pages(state.content, state.pages)

  return html`
    <div class="x xjc ffmono">
      ${links.map(link)}
    </div>
  `

  function link (link) {
    var activeClass = isActive(link.name) ? 'fwb' : ''
    return html`
      <div class="p0-5 ${activeClass}">
        <a href="${link.url}">${link.title || link.dirname}</a>
      </div>
    `
  }

  function isActive (pathLink) {
    return active .split(path.sep).filter(str => str)[0] === path.basename(pathLink)
  }
}

function loading () {
  return ''
}

function footer (state, emit) {
  return html`
    <div class="c12 p2 tcgrey">
      <div class="c12 x xjb pt1 bt1">
        <div>
          Enoki
        </div>
        <div>
          <a href="#">Back to Top</a>
        </div>
      </div>
    </div>
  `
}
