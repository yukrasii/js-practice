const array = [-10, -7, 3, 4, 9, 6, -6, -8, 5, 10, -1, -2, -3, -4, -5, 7, 2, 8, -9, 1]

/**
 * This function sorts data (numbers) in array from high to low value
 * @param {number} currentValue 
 * @param {number} nextValue 
 * @returns {number}
 */

//also we can use just if/else
function compareFunction(currentValue, nextValue) {
    if (currentValue > nextValue) {
        return -1
    }

    if (currentValue < nextValue) {
        return 1
    }

    if (currentValue = nextValue) {
        return 0
    }
} 

array.sort(compareFunction)


