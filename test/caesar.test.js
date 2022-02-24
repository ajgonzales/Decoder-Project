// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Ceasar() tests written by me", () => {
    it("should return false if the shift amount is 0", () => {
        const message = "Hello World";
        const shift = 0;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })
    it("should translate the message to encode it", () => {
        const message = "Hello World";
        const shift = 12;
        const actual = caesar(message, shift);
        const expected = "tqxxa iadxp";

        expect(actual).to.equal(expected);
    })
    it("should translate the message to decode it", () => {
        const message = "nvvkifl dvysk"
        const shift = 7;
        const actual = caesar(message,shift,false);
        const expected = "goodbye world";

        expect(actual).to.equal(expected);
    })
})