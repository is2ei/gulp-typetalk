gulp-typetalk
===

Gulp plugin to send notifications to Typetalk

[![Build Status](https://img.shields.io/travis/com/is2ei/gulp-typetalk/master.svg?style=flat-square)][travis]
[![npm version](https://img.shields.io/npm/v/gulp-typetalk.svg?style=flat-square)][npm]

[travis]: https://travis-ci.com/is2ei/gulp-typetalk
[npm]: https://badge.fury.io/js/gulp-typetalk


## Install

```
$ npm i --save-dev gulp-typetalk
```

## Usage

```javascript
const typetalk = require("gulp-typetalk");
const config = require("./config");

function typetalkExample (cb) {
    typetalk({
        token: config.token,
        topicId: config.topicId,
        message: "Hello, World!"
    });
    cb();
}

exports.default = typetalkExample;
```
For working example, see [this repository](https://github.com/is2ei/gulp-typetalk-example)
