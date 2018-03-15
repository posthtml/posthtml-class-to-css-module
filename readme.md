# posthtml-class-to-css-module

> A [posthtml](https://github.com/posthtml) A posthtml plugin for clone `class` to attribute `css-module`

[![Travis Build Status](https://img.shields.io/travis/posthtml/posthtml-class-to-css-module/master.svg?style=flat-square&label=unix)](https://travis-ci.org/posthtml/posthtml-class-to-css-module)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/posthtml-class-to-css-module.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-class-to-css-module)[![Dependency Status](https://david-dm.org/gitscrum/posthtml-class-to-css-module.svg?style=flat-square)](https://david-dm.org/gitscrum/posthtml-class-to-css-module)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/posthtml/posthtml-class-to-css-module.svg?style=flat-square)](https://coveralls.io/r/posthtml/posthtml-class-to-css-module)

[![npm downloads](https://img.shields.io/npm/dm/posthtml-class-to-css-module.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-class-to-css-module)[![npm](https://img.shields.io/npm/dt/posthtml-class-to-css-module.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-class-to-css-module)

## Why?
The plugin for cloning classes in the attribute `css-module` when used together with [posthtml-css-modules](https://github.com/posthtml/posthtml-css-modules)

## Install

```bash
npm i -D posthtml posthtml-class-to-css-module
```

> **Note:** This project is compatible with node v4+

## Usage

```js
import {readFileSync, writeFileSync} from 'fs';
import posthtml from 'posthtml';
import clone from 'posthtml-class-to-css-module';

const html = readFileSync('input.html', 'utf8');

posthtml()
    .use(clone())
    .process(html)
    .then(result => {
        writeFileSync('output.html', result.html);
    });

```
Returns the html with cloned classes in the attribute `css-module`

## Example

#### input.html
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body class="class-for-body"></body>
</html>
```

#### output.html
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body class="class-for-body" css-module="class-for-body"></body>
</html>
```

## Options

### `removeClass`
Type: `Boolean`  
Default: false  
Description: *Removes the `class` attribute after cloning the `class` value to an attribute `css-module`*  
