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


const user2 = {
    firstName: 'Test',
    lastName: 'Testenko',
    age: 18,
    isMale: true
}

function sayHi (user) {
    
    return `Hello, ${user.firstName} ${user.lastName}`
}

