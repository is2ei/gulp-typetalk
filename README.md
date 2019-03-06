gulp-typetalk
===

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
