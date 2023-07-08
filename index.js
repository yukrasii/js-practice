
let counter1 = 0;

/**
 * This fucntion accepts the number, start the loop 'while', checks if number value is even and if it is, it shows the value on console. The way to break loop here is the condition inside it.
 * @param {number} counter1 
 * @returns {string}
 */

function loop1 (counter1) {
    console.log(`counter = ${counter1}`)
    
    while (counter1 <= 10) {
        
        if (++counter1 %2 === 0) {
            console.log(`counter = ${counter1}`)
    }
    
}

return console.log(`after loop is stoped the value 'counter1' is ${counter1}`)

}

loop1(counter1)

/**
 * This fucntion accepts the number(counter), start the loop 'while', checks if number value is even and if it is, it shows the value on console.
 *  The way to break loop here is the 'break' operator when the value of counter exceeds condition.
 * @param {number} counter2 
 * @returns {string}
 */

let counter2 = 0;

function loop2 (counter2) {
while (true) {
    
    if (counter2 %2 === 0) {
        console.log(`counter = ${counter2}`)
    }

    if (counter2++ > 10) {
        break
    } 
}
    
    return console.log(`after loop is stoped the value 'counter2' is ${counter2}`)

}


loop2(counter2)