'use strict';

var Assert = require('assert')
var Util = require('util')
var Async = require('async')
var Code = require('code')
var Gex = require('gex')
var _ = require('lodash')
var Lab = require('lab')
var Package = require('../package.json')
var devis=require("..");

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect
var assert = Assert

var timerstub = {
  setTimeout: setTimeout,
  setInterval: setInterval,
  Date: Date,
  wait: function (dur, fn) {
    setTimeout(fn, dur)
  }
}



describe('devis', function () {
  lab.beforeEach(function (done) {
    process.removeAllListeners('SIGHUP')
    process.removeAllListeners('SIGTERM')
    process.removeAllListeners('SIGINT')
    process.removeAllListeners('SIGBREAK')
    done();
  })
})