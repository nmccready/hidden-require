/*
  Since webpack relies on search and replace of require 'string' or require "string".
  Calling require via another function hides the requirement from webpack/browserify.

  This allows for optional dependencies which can allow more code bases to more easily work
  in both the browser and in node.
  */
const hiddenRequire = (dep) => {
  const ret = require(dep);
  return ret.default || ret;
};

module.exports = hiddenRequire;
