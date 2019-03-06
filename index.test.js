/* eslint-disable func-names, max-lines-per-function */

const typetalk = require("./index.js");
const {expect} = require("chai");
const nock = require("nock");

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

    describe("with enough options", function () {

        before(function () {
            const OK = 200;
            nock("https://typetalk.com")
                .post("/api/v1/topics/12345")
                .reply(OK, {});
        });

        it("should post message", function () {
            expect(function () {
                typetalk({
                    "message": "Hello, World!",
                    "token": "qweasdzxc",
                    "topicId": 12345
                });
            })
                .not
                .to
                .throw();
        });
    });
});
