let correctPassword = 'qwe';

let userPassword = prompt('Enter password');

/**
 * Function accepts parameters of two values (passwords) and compares them. If they are identical, function returns *success*, 
 * if not, the loop 'for' inside gives 5 attempts to retry and if they are exhausted function returns alert about this.
 * 
 * @param {string} correctPassword 
 * @param {string} userPassword 
 * @returns {prompt |alert}
 */

function authentication (correctPassword, userPassword) {
    
    if (userPassword === correctPassword) {
        alert('password correct')
        
    } else {
        for (let i = 0; i < 5; i++) {
            userPassword = prompt('Wrong password. Try again')
            if (userPassword === correctPassword) {
                alert('Password correct')
                return;
            }
        } 
    }
    alert ('Too many attempts. Access denied')
    }

    authentication (correctPassword, userPassword)


