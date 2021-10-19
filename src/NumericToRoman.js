//utility function for array of objects
const numUtility = (value, roman) => {
  return {
    value: value,
    roman: roman
  };
};

//number to Roman conversion function
let numToRoman = num => {
  if (isNaN(num)) throw new Error("Number is required");
  if (num === 0) throw new Error("Number should not be 0");
  if (num > 3999) throw new Error("Number is greater than 3999");

  //array of object is deined to store the basic roman numerals against numbers 
  const numeral = [
    numUtility(1000, 'M'),
    numUtility(500, 'D'),
    numUtility(400, 'CD'),
    numUtility(100, 'C'),
    numUtility(50, 'L'),
    numUtility(10, 'X'),
    numUtility(9, 'IX'),
    numUtility(5, 'V'),
    numUtility(4, 'IV'),
    numUtility(1, 'I')
  ];
  let result = '';

  //We will check the if the entered number is greater than 0 or less than 3999
  //bcz roman didn't have 0 in there counting and numbers above 3999 should be represented 
  //with special bar over them.
  if (!isNaN(num) && 3999 > num > 0)
    numeral.forEach(item => {
      for (; num >= item.value; num -= item.value)
        result += item.roman;
    });
  return result;
};

//Roman to number conversion main function
let romanIntoNum = str => {
  if (!str || !isNaN(str)) throw new Error("Roman numeral is required");

  //object is defined to check the value for basic roman numberals
  const numeral = {
    'M': 1000,
    'D': 500,
    'CD': 400,
    'C': 100,
    'L': 50,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  let result = 0;
  if (isNaN(str))
    str.split('').forEach((item, index) => numeral[item] < numeral[str[index + 1]] ?
      result -= numeral[item] : result += numeral[item]);
  return result;
};


module.exports = {
  numToRoman,
  romanIntoNum
};