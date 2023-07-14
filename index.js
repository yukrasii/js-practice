// const User = function (firstName, lastName, sex, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sex = sex;
//     this.age = age;
//     this.speak = function () {
//         console.log('Is speaking')        
//     }
//     this.fullName = function() {
// console.log(this.firstName + ' ' + this.lastName)
//     }
// }

// const user1 = new User ('Petro', 'Ivanenko', 'male', 32)


const user1 = {
    firstName: 'Test',
    lastName: 'Testenko',
    age: 18,
    isMale: true
}

const user2 = {
    firstName: 'Aaa',
    lastName: 'Aaa',
    age: 18,
    isMale: true
}


const user3 = 'sdsfs'


/**
 * This function accepts object of user and returns greeting by using its property.
 *  Also function checks whether the data passed to it is an object.
 * Func uses template string
 * 
 * @param {objectbject} user 
 * @returns {string}
 */
function greetUser (user) {
    if (typeof user !== 'object') {
        return 'Hello, Guest!'
    }
    
    return `Hello, ${user.firstName} ${user.lastName}`
}

/**
 * This function accepts object of user and returns greeting by using its property.
 *  Also function checks whether the data passed to it is an object (by checking the presence a property of the object )
 * Func also uses template string
 * 
 * @param {objectbject} user 
 * @returns {string}
 */

function greetUser2 (user) {
    if (user.firstName === undefined) {
        return 'Hello, Guest!'
    }
    
    return `Hello, ${user.firstName} ${user.lastName}`
}

 