# :see_no_evil: rx :hear_no_evil:
monkey patch for https://github.com/Reactive-Extensions/RxJS


# Install

```
npm i monkey-patches-rx --save --save-exact
```

# Usage
## Setup
```js
var options = {/* ... */};
Rx = require('rx');
require('monkey-patches-rx')(Rx, options);
```

# Options
## all
with this option you can enable all patch.
```js
options = {all: true};
// setup
```
## typeFilter
with this option following methods will be added to Observables.

- `isTruthty`
- `isFalsey`
- `isDefined`
- `isNull`
- `isUndefined`
- `isString`

```js
options = {typeFilter: true};
// setup
var obj$ = Rx.Observable.from([0, 1, null, undefined, false, true, '', {}, [], 'Hi']);
obj$.isTruthty(); // 1 true {} [] 'Hi'
obj$.isFalsey(); // 0 null undefined false ''
obj$.isDefined(); // 0 1 null false true '' {} [] 'Hi'
obj$.isNull(); // null
obj$.isUndefined(); // undefined
obj$.isString(); // '' 'Hi'
```
[related issue](https://github.com/Reactive-Extensions/RxJS/issues/948)

# Compatibility

I test this package with `rx@4.1.0` and `node@v5.3.0`

# Sem version, backward compatibility and ...
No. this is only :monkey_face: patch. so every time install this package with `--save-exact` option.