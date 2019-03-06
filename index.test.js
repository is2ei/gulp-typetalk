const typetalk = require("./index.js");
const {expect} = require("chai");

describe("gulp-typetalk", function () {
    describe("without token", function() {
        it("should throw error", function () {
            expect(function () {
                typetalk({
                    "token": "",
                    "topicId": 1234567890,
                    "message": "Hello, World!"
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
                    "token": "qweasdzxc",
                    "topicId": "",
                    "message": "Hello, World!"
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
                    "token": "qweasdzxc",
                    "topicId": 1234567890,
                    "message": "Hello, World!"
                });
            })
            .to
            .throw();
        })
    });
});
