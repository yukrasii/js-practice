const array = [-10, -7, 3, 4, 9, 6, -6, -8, 5, 10, -1, -2, -3, -4, -5, 7, 2, 8, -9, 1]


/**
 * This func says to *filter* method how to filter the oddNumbers in array 
 * @param {} number 
 * @returns 
 */
const isOdd = function (number) {
    return number %2 !== 0
}


const sortedArray = array.filter(isOdd)