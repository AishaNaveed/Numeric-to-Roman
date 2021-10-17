//utility function for array of objects
const numUtility = (value, roman) => {
    return {
      value: value,
      roman: roman
    };
  };
  
  //number to Roman conversion main function
  let RomanConvertor = num => {
    if (isNaN(num)) throw new Error("Number is required");
    if (num === 0) throw new Error("Number should not be 0");
    if (num > 3999) throw new Error("Number is greater than 3999");
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
    if(!isNaN(num) && 3999 > num > 0){
      numeral.forEach(item => {
        for(; num >= item.value; num -= item.value)
          result += item.roman;
      });    
    }
    return result;
  };

module.exports = RomanConvertor;