/** This "while" cycle with boolean condition demonstrates how we can stop it by using "break". 
 * 
 */

let counter = 0;

while(true) {

    console.log('iteration')

    if (++counter >= 3) {
        break;
    }
}

/** This "while" cycle accepts variable and demonstrates how we can stop it by change the variabe value from true to false by asking user via confirm function. 
 * 
 */

let shouldConfirm = true


while(shouldConfirm) {
    console.log('Iteration')
shouldConfirm = confirm('Continue cycle?')
}
