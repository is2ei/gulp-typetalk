/* eslint-disable max-lines-per-function */

const nock = require("nock"),
    typetalk = require("./index.js"),
    {expect} = require("chai");

describe("gulp-typetalk", () => {
    describe("without token", () => {
        it("should throw error", () => {
            expect(() => {
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

    describe("without topic id", () => {
        it("should throw error", () => {
            expect(() => {
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

    describe("without message", () => {
        it("should throw error", () => {
            expect(() => {
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

    describe("with enough options", () => {

        before(() => {
            const OK = 200;
            nock("https://typetalk.com")
                .post("/api/v1/topics/12345")
                .reply(OK, {});
        });

        it("should post message", () => {
            expect(() => {
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
