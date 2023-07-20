function Cat (name, age, breed,) {
    this.name = name;
    this.age = age;
    this.breed = breed
}

//meow eat  

// const catOptions = {
//     meow: function (meow) {
//     return `${this.name} says ${meow}`
// },

//     sleep: function () {
//     return `${this.name} is sleeping now`
// }
// }

// Cat.prototype = catOptions

const catMeow = {
    meow: function (meow) {
    return `${this.name} says ${meow}`
},
}


const catSleep = {
    sleep: function () {
     return `${this.name} is sleeping now`
}
}


//example of prototype inheritance
catMeow.__proto__ = catSleep

Cat.prototype = catMeow

const cat1 = new Cat ('Barsik', 10, 'Cheshire')



