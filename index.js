'use strict'



// /**
//  * 
//  * @param {str} str 
//  * @returns {str}
//  */
// function randomCase (str) {
//     let newStr = ''

// for(let i = 0; i < str.length; i++) {
//     if (Math.random() < 0.5) {
//         newStr += str[i]
//     } else {
//         newStr += str[i].toUpperCase()
//     }
// }


// return newStr

// }

// randomCase(string)



// function upperCase (str) {
//     let newStr = ''

// for(let i = 0; i < str.length; i++) {
    
//         newStr += str[i].toUpperCase()
// }
// return newStr
// }

// upperCase(string)


// function upperCase (str) {
    
//     let words = str.split(' ')
    
//     // let capitalizedString = 0
   
       
//     for (let i = 0; i < words.length; i++) {
        
//         let firstLetter = words[i][0].toUpperCase();

//         words[i] = firstLetter + words[i].slice(1)

        
        
//     }
    
     
    
//      return words.join(' ')
    
    
    

// }


// upperCase(string)





// function upperCase (str) {
    
//     let words = str.split(' ')
//     // let upperCasedArr = []
//     let capitalizedString = 0
   
       
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i]
//         let firstLetter = word[0].toUpperCase();

//         // const upperCasedLetter = word[0].toUpperCase()
        

//         words[i] = firstLetter + words[i].slice(1)
        
//         capitalizedString = words.join(' ')
        
        
        
//     }
    
    
    
//     return capitalizedString
    

// }





// const func2 = function () {
//     console.log(this)
// }

// function func () {
//     console.log(this)
// }

const string = 'privet moy svet'

/**
 * The func which accepts string (of words)
 * and returns string with capitalized сapital letters in each word
 * (maded with split string method+slice array method + join array method)
 * 
 * @param {string} str 
 * @returns {string}
 */

function toUpperCase (str) {
    let words = str.split(' ')
// debugger
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i][0].toUpperCase()
        words[i] = firstLetter + words[i].slice(1)
       
    }
    
    const word = words.join(' ')
    return word
}