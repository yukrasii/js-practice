const numObj = new Number (1)

const num = Number (1)


const strObj = new String ('Test')

const str = String ('Test')

const str2 = 'String2'


const bool = Boolean ('test')

const bool2 = new Boolean ('test')


const Anton = 'Anton           Antonenko'

/**
 * 
 * This func accepts string with excessive gaps and returns fixed string
 * Inside func we can see the processes as: 
 * 1. split the contents of accepted string to array in the created const
 * 2. filter the content of array
 * 3. join filtered content to string and separating them by gap  
 * @param {string} str 
 * @returns {string}
 */

const betterTrim = function (str) {
    
    const splittedString = str.split(' ')
   

    const filteredWords = splittedString.filter(function(word) {
        return word !== ''
    })
    
    const trimmedWords = filteredWords.join(' ')
     return  trimmedWords
}


console.log(betterTrim(Anton))
