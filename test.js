var qs = require('.')
var html = require('bel')

var styles = qs('c6 p1 tac', { borderBottom: '1px solid red', sm: 'c12' })

var element = html`<div ${styles}></div>`

console.log(styles)
console.log(element)
