const RomanConvertor = require("./NumericToRoman");

test("will return error if the number is not passed", () => {
    expect(() => RomanConvertor()).toThrow("Number is required");
    expect(() => RomanConvertor("IV")).toThrow("Number is required");
});

test("will return error if the number is 0", () => {
    expect(() => RomanConvertor(0)).toThrow("Number should not be 0");
});

test("will return error if the number is greater than 3999", () => {
    expect(() => RomanConvertor(10870)).toThrow("Number is greater than 3999");
});

test("return appropriate roman number", () => {
    expect(RomanConvertor(1)).toBe("I");
    expect(RomanConvertor(3)).toBe("III");
    expect(RomanConvertor(4)).toBe("IV");
    expect(RomanConvertor(8)).toBe("VIII");
    expect(RomanConvertor(10)).toBe("X");
    expect(RomanConvertor(11)).toBe("XI");
    expect(RomanConvertor(19)).toBe("XIX");
    expect(RomanConvertor(59)).toBe("LIX");
    expect(RomanConvertor(1087)).toBe("MLXXXVII");
});

