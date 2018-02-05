var html = require('choo/html')
var ov = require('object-values')
var format = require('../components/format')
var thumbnail = require('../components/thumbnail')
var methodsPages = require('../methods/pages')

module.exports = home

function home (state, emit) {
  var pageProjects = methodsPages.pages(state.content, state.content['/projects'].pages)
  var pageBlog = methodsPages.pages(state.content, state.content['/blog'].pages)

  return html`
    <div>
      <div class="x xjc c12 p1 fs2 lh1-25 tac sm-mt4">
        ${text()}
      </div>
      <div class="x xw p1 mt2">
        <div class="x xw c8 sm-c12 sm-mt4">
          ${projects()}
          <div class="c12 tac pt1">
            <a href="/projects" class="button">View all Projects</a>
          </div>
        </div>
        <div class="c4 sm-c12 sm-mxp sm-mt4">
          ${blogs()}
        </div>
      </div>
    </div>
  `

  function sectionTitle (title) {
    return html`<div class="c12 px1">${title}</div>`
  }

  function projects () {
    return pageProjects.slice(0, 4).map(thumbnail)
  }

  function blogs () {
    return pageBlog.slice(0, 4).map(entry)

    function entry (entry) {
      return html`
        <a
          href="${entry.url}"
          class="db nbb p1"
        >
          <div class="fwb">${entry.title}</div>
          <div class="tcgrey ffmono">${entry.date}</div>
          <div class="pt1">${format(entry.excerpt)}</div>
        </a>
      `
    }
  }

  function text () {
    return html`
      <div class="c8 sm-c12">
        ${format(state.page.text)}
      </div>
    `
  }
}

