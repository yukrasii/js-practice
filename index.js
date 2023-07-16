// JS Arrays methods practice

const user = [
    'test1',
     'test2',
      'test3',
       'test4',
        'test5',
         'test6'
]

const user2 = [
    'test22',
 'test23',
  'test24',
   'test25',
    'test26']

user[4] = 'test5'

user.push('test7')

user.push('test8')

user.pop() //'test8'




//slice first half of array. test1 - test3 (/ 2)(+ 2 test4, test5)
const copiedArr = user.slice(0, user.length / 2  + 2)




//.concat opens concated array and pushes it as data

 const concated = user.concat(user2_)
 
