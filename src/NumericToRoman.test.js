const {
    numToRoman,
    romanIntoNum
} = require("./NumericToRoman");

describe("numToRoman", () => {
    test("will return error if the number is not passed", () => {
        expect(() => numToRoman()).toThrow("Number is required");
        expect(() => numToRoman("IV")).toThrow("Number is required");
    });

    test("will return error if the number is 0", () => {
        expect(() => numToRoman(0)).toThrow("Number should not be 0");
    });

    test("will return error if the number is greater than 3999", () => {
        expect(() => numToRoman(10870)).toThrow("Number is greater than 3999");
    });

    test("return appropriate roman number", () => {
        expect(numToRoman(1)).toBe("I");
        expect(numToRoman(3)).toBe("III");
        expect(numToRoman(4)).toBe("IV");
        expect(numToRoman(8)).toBe("VIII");
        expect(numToRoman(10)).toBe("X");
        expect(numToRoman(11)).toBe("XI");
        expect(numToRoman(19)).toBe("XIX");
        expect(numToRoman(59)).toBe("LIX");
        expect(numToRoman(1087)).toBe("MLXXXVII");
    });
});

describe("romanIntoNum", () => {
    test("will return error if the roman numeral is not passed", () => {
        expect(() => romanIntoNum()).toThrow("Roman numeral is required");
        expect(() => romanIntoNum(0)).toThrow("Roman numeral is required");
    });

    test("return appropriate numeric for given roman number", () => {
        expect(romanIntoNum('XIX')).toBe(19);
        expect(romanIntoNum('CL')).toBe(150);
        expect(romanIntoNum('MCLX')).toBe(1160);
        expect(romanIntoNum('CCCLXXXVII')).toBe(387);
    });
});