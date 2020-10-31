const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let addition = options.addition;
    let result = '';
    let repeatTimes = options.repeatTimes;//number
    let separator = options.separator; //'+'
    let additionRepeatTimes = options.additionRepeatTimes; //number
    let additionSeparator = options.additionSeparator; //'|'

    if (str === null) {
        str = 'null';
    }
    if (options.addition === undefined) {
        addition = '';
    }
    if (additionSeparator === '' || additionSeparator === null || additionSeparator === undefined) {
        additionSeparator = '|';
    }
    if (separator === '' || separator === null || separator === undefined) {
        separator = '+';
    }
    if (repeatTimes === undefined || repeatTimes === null) {
        repeatTimes = 1;
    }
    if (additionRepeatTimes === undefined || additionRepeatTimes === null) {
        additionRepeatTimes = 1;
    }

        for (let i = 0; i < repeatTimes; i++) {
            result += str;
                for (let j = 0; j < additionRepeatTimes; j++) {
                    result += addition;
                    // в конце сепаратор не довабляется
                    if (j < additionRepeatTimes - 1) {

                        result += additionSeparator;
                    }
                }
            if (i < repeatTimes - 1) {
                result += separator;
            }
        }

    return result;
};

  