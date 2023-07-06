

const number = +prompt('Enter your number')

/**
 * This function сhecks is number is even or odd and returns alert with its value
 * @param {number} number 
 * @returns {string}
 */

function isEven (number) {
    if (typeof number != 'number' ||
        isNaN(number)) {
            return alert('wrong input')
        }

        else {
            if (number%2 === 0) {

                return alert('number is even')
            }
            else {

                return alert('number is odd')
            }
        }
}

isEven(number)