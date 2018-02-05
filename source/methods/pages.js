var assert = require('assert')
var objectValues = require('object-values')

module.exports = {
  pages: pages,
  page: page
}

function pages (content, hrefs) {
  try {
    assert(typeof hrefs === 'object', 'arg1 content must be type object')
    assert(typeof hrefs === 'object', 'arg2 hrefs must be type array or object')
    if (!(hrefs instanceof Array)) hrefs = objectValues(hrefs).map(page => page.url)
    return hrefs.map(href => content[href])
  } catch (err) {
    return [ ]
  }
}

function page (content, href) {

}