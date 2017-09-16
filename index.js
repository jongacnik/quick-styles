var x = require('xtend')
var inlineStyle = require('inline-style')

var options = {
  attributes: ['sm', 'md', 'lg'],
  inlineStyles: true
}

module.exports = quickstyle

function quickstyle (classnames, extras) {
  var attrs = {}
  var styles = {}

  options.attributes.forEach(function (attribute) {
    if (attribute in extras) {
      attrs[attribute] = extras[attribute]
      delete extras[attribute]
    }
  })

  if (Object.keys(extras)) {
    styles.style = options.inlineStyles
      ? inlineStyle(extras)
      : extras
  }

  return x({
    className: classnames
  }, attrs, styles)
}

quickstyle.set = function (newoptions) {
  options = x(options, newoptions)
}
