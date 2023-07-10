// /**
//  * This loop 'for' consoles numbers from 30 to 0
//  */

for (let i = 30; i >= 0; i--) {
    console.log (i)
}




// /**
//  * This loop 'while' consoles numbers from 30 to 0
//  */

let i = 30;

while(i >= 0) {
    console.log(i)
    i--;
}



// /**
//  * This loop 'while' consoles numbers from 30 to 0
//  */

i = 100;

do {
    console.log(i)
    i--;
} while (i >= 0)


/**
 * This loop 'for' counts summary numbers from 1 to 100 by adding the iteration value to sum variable. 
 */

let sum = 0

for (let i = 1; i <= 100; i++) {
    
    console.log(sum += i)
}

/**
 * This loop 'while' counts summary numbers from 1 to 100 by adding the iteration value to sum variable. 
 */

let counter = 1;
sum = 0

while(counter <= 100) {
    console.log(sum += counter)
    counter++
}