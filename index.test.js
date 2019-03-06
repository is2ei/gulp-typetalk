/* eslint-disable func-names */

const typetalk = require("./index.js");
const {expect} = require("chai");

describe("gulp-typetalk", function () {
    describe("without token", function () {
        it("should throw error", function () {
            expect(function () {
                typetalk({
                    "message": "Hello, World!",
                    "token": "",
                    "topicId": 1234567890
                });
            })
                .to
                .throw();
        });
    });

    describe("without topic id", function () {
        it("should throw error", function () {
            expect(function () {
                typetalk({
                    "message": "Hello, World!",
                    "token": "qweasdzxc",
                    "topicId": ""
                });
            })
                .to
                .throw();
        });
    });

    describe("without message", function () {
        it("should throw error", function () {
            expect(function () {
                typetalk({
                    "message": "",
                    "token": "qweasdzxc",
                    "topicId": 1234567890
                });
            })
                .to
                .throw();
        });
    });
});
