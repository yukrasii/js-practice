function getBiggerOfTwoNumbers (number1, number2) {
    if (typeof number1 !== 'number' ||
        typeof number2 !== 'number' ||
        isNaN(number1) ||
        isNaN(number2) ) {
            return 'wrong input'
        }

        else {
            if (number1 > number2) {
                return number1
            }
            else {return number2}
        }
}

