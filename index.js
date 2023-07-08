let counter = 0

let correctPassword = 'qwe';

let userPassword = prompt('Enter password');

/**
 * The case with authentication. Loop fot accepts parameters of two values (passwords) and compares them. If they are identical, function returns *success*, 
 * if not, the loop 'while' inside gives 5 attempts to retry and if they are exhausted loop returns alert about this.
 * 
 * @param {string} correctPassword 
 * @param {string} userPassword 
 * @returns {prompt |alert}
 */

while (counter <= 5) {
    if (userPassword !== correctPassword) {
        counter++
        userPassword = prompt(`Incorrect password. Try again: ${counter}`)
        }
        
    else if (userPassword === correctPassword) {
        alert ('Password Correct')
        break}
        
        if (counter === 5) {
            alert ('Too many attempts. Try again later')
            break

        }
        
    }


