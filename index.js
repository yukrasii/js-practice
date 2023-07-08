
let counter = 0;

/**
 * This fucntion accepts the number, start the loop 'do while' just to show that one itteration will occur under any conditions.
 *      
 * @param {number} counter 
 * @returns {string}
 */

function loop (counter) {
    
        do {
        counter++
        console.log(counter)

    } while (false)
    

return console.log(`after loop is stoped the value 'counter' is ${counter}`)

}

loop(counter)