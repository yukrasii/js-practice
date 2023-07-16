const array = [ 1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]

/**
 * This function sorts data (numbers) in array from low to high value
 * @param {number} currentValue 
 * @param {number} nextValue 
 * @returns {number}
 */
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

//also we can use just if/else

