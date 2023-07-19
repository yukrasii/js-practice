/**
 * This function-constructor can make objects of users
 */
const User = function (firstName, lastName, email, age, isMale, isSubscribed) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.age = age,
    this.isMale = isMale,
    this.isSubscribed = isSubscribed
 }

 /**
  * This function makes an amount of random users
  * @param {number} amount 
  * @returns {Array}
  */
 
 function createUsers (amount) {
    const usersArray = []

    for(let i = 0; i < amount; i++) {
    const user = new User (
        `John ${i}`,
         `Doe ${i}`,
          `email${i}@gmail.com`,
           Math.round(Math.random() * 100),
            Math.random() > 0.5,
            Math.random() > 0.5
             )
                
            usersArray.push(user)
        } 
            return usersArray
    }

    usersArray1 = createUsers(20)

    console.table(usersArray1)


    //get array of emails (map):

    const usersEmails = usersArray1.map(function (user) {
                return user.email;
            })


            //get array of adult users (filter)
            const adultUsers = usersArray1.filter(function(user) {
                return user.age > 17
            })