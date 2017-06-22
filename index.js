'use strict'

const path = require('path')
const obj = {
  argv0: process.argv0,
  argv1basename: path.basename(process.argv[1], '.js'),
  yargs$0: yargs$0()
}

module.exports = function argv0 () {
  return Object.assign({}, obj)
}

function yargs$0 () {
  let $0 = process.argv.slice(0, 2).map(function (x, i) {
    // ignore the node bin, specify this in your
    // bin file with #!/usr/bin/env node
    if (i === 0 && /\b(node|iojs)(\.exe)?$/.test(x)) return
    var b = path.relative(process.cwd(), x)
    return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x
  }).join(' ').trim()

  if (process.env._ !== undefined && process.argv[1] === process.env._) {
    $0 = process.env._.replace(
      path.dirname(process.execPath) + '/', ''
    )
  }

  return $0
}
