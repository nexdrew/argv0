# argv0

> Compare process.argv0 to other values

A mini tool to show the difference between `process.argv0` ([added in Node 6.4.0](https://nodejs.org/api/process.html#process_process_argv0)) and other methods for determining the name of the bin script being executed for a globally installed package.

## Installation and Usage

As global bin:

```console
$ npm install -g argv0
```

```console
$ argv0
{ argv0: 'node',
  argv1basename: 'argv0',
  'yargs$0': '/usr/local/bin/argv0' }
```

As module:

```console
$ npm install argv0
```

```js
const argv0 = require('argv0')
console.log(argv0())
```

## License

ISC © Contributors
