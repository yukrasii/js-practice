
let counter = 0;

/**
 * This fucntion accepts the number, start the loop 'while', checks if number value is even and if it is, it shows the value on console.
 *  The way to break loop here is the condition inside it.
 *      
 * @param {number} counter 
 * @returns {string}
 */

function loop1 (counter) {
    
        while (counter <= 10) {
        //The function has been rewritten(shortened by using addition assignment operator):
        console.log(counter)
        counter+=2
    }
    

return console.log(`after loop is stoped the value 'counter' is ${counter}`)

}

loop1(counter)

/**
 * This fucntion accepts the number(counter), start the loop 'while', checks if number value is even and if it is, it shows the value on console.
 *  The way to break loop here is the 'break' operator when the value of counter exceeds condition.
 *  
 * @param {number} counter 
 * @returns {string}
 */

function loop2 (counter) {
while (true) {
    //The function has been rewritten(shortened by using addition assignment operator):
    console.log(counter)
    counter+=2

    if (counter > 10) {
        break
    } 
}
    
    return console.log(`after loop is stoped the value 'counter' is ${counter}`)

}


loop2(counter)