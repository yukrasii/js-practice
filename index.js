/**
 * This function compares two numbers and returns bigger number
 * @param {number} number1 
 * @param {number} number2 
 * @returns {string}
 */

function getBiggerNumber (number1, number2) {
    if (typeof number1 !== 'number' ||
        typeof number2 !== 'number' ||
        isNaN(number1 - number2)) {
            return 'wrong input'
        }

        else {
            if (number1 > number2) {
                return number1
            }
            return number2
        }
}

/*getBiggerNumber(2,5)*/