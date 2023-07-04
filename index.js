function checkNumberForParity (number) {
    if (typeof number !== 'number' ||
        isNaN(number)) {
            return 'wrong input'
        }

        else {
            if (number%2 === 0) {

                return 'number is even'
            }
            else {

                return 'number is odd'
            }
        }
}

