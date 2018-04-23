# hidden-require [![Build Status](https://travis-ci.org/nmccreadu/hidden-require.svg)](https://travis-ci.org/nmcccready/hidden-require)

This library is intended at hiding and making some dependencies in node libraries optional when
bundled in webpack/browserify.

## Example:

```js
const hiddenRequire = require('hidden-require');

/*
allow request to be optional to allow for other platforms to shim request
  fetch, google app script (UrlFetchApp), etc.. many more

More use cases:
  - node-gyp dependencies where there are c/c++ bindings
*/
module.exports = (request = hiddenRequire('request')) => {
  ...// do something with request and then some
}
```
