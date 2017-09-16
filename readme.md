<h1 align="center">quick-style💨</h1>

<div align="center">
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="Stability" />
  </a>
</div>

<br />

Quickly create attributes and inline-styles. Best paired with a functional css utility library like [gr8](https://github.com/jongacnik/gr8) or [tachyons](https://github.com/tachyons-css/tachyons)

## Usage

```js
var qs = require('quick-style')
var html = require('bel')

var attributes = qs('c6 p1 tac', { borderBottom: '1px solid red' })

var element = html`<div ${attributes}></div>`
```

Resulting element

```html
<div class="c6 p1 tac" style="border-bottom:1px solid red"></div>
```

## API

### `attributes = qs(classnames, extras)`

Returns html attributes as object. `classnames` expects a string of classnames, `extras` expects an object of css properties or additional attributes and values:

```js
qs('c6 p1 tac', { 
  borderBottom: '1px solid red',
  sm: 'c8 p2 tal',
  md: 'c12'
})
```

```html
<div class="c6 p1 tac" sm="c8 p2 tal" md="c12" style="border-bottom:1px solid red"></div>
```

### `qs.set([opts])`

Set some global options. Shared throughout app – set once, use everywhere. Defaults:

```js
qs.set({
  attributes: ['sm', 'md', 'lg'],
  inlineStyles: true
})
```

- **`attributes`** Array of attribute names which should not be interpreted as inline-styles
- **`inlineStyles`** Enable/Disable css property object → inline-styles (potentially useful in preact/react land where this conversion is handled for you)

## See Also

- [gr8](https://github.com/jongacnik/gr8)
- [gr8-util](https://github.com/jongacnik/gr8-util)
- [lilcss](https://github.com/jongacnik/lilcss)

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Todo

- [ ] Asserts
- [ ] Browserify Transform? (to extract selectors from css)
- [ ] Tests
