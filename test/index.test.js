const { expect } = require('chai');
const { spawn } = require('child_process');
const path = require('path');

const hiddenRequire = require('../');

describe('hiddenRequest', () => {
  it('grabs dependency', () => {
    const fs = require('fs');
    expect(fs, hiddenRequire('fs'));
  });

  it('fs should fail for webpack', (done) => {
    const args = webpack('without.confg.js');
    const proc = spawn(args.shift(), args);

    proc.once('close', (code) => {
      expect(code).to.not.equal(0);
      done();
    });
  });

  it('hidden fs should pass webpack', (done) => {
    const args = webpack('with.confg.js');
    const proc = spawn(args.shift(), args);

    proc.once('close', (code) => {
      expect(code).to.equal(0);
      done();
    });
  });
});

function webpack(fileName) {
  return `yarn webpack --config ${getPath(fileName)}`.split(' ');
}

function getPath(fileName) {
  return path.join(__dirname, './fixtures/', fileName);
}
