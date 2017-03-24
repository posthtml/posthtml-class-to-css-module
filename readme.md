# <a href="https://github.com/posthtml/posthtml"><img valign="text-bottom" height="49" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg"></a> class to css module

> A [posthtml](https://github.com/posthtml) A posthtml plugin for clone `class` to attribute `css-module`

[![Travis Build Status](https://img.shields.io/travis/GitScrum/posthtml-class-to-css-module/master.svg?style=flat-square&label=unix)](https://travis-ci.org/GitScrum/posthtml-class-to-css-module)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/posthtml-class-to-css-module/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/posthtml-class-to-css-module)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/posthtml-class-to-css-module.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-class-to-css-module)[![Dependency Status](https://david-dm.org/gitscrum/posthtml-class-to-css-module.svg?style=flat-square)](https://david-dm.org/gitscrum/posthtml-class-to-css-module)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/GitScrum/posthtml-class-to-css-module.svg?style=flat-square)](https://coveralls.io/r/GitScrum/posthtml-class-to-css-module)

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

## LICENSE

> MIT License (MIT)

> Copyright (c) Ivan Demidov <scrum@list.ru>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
