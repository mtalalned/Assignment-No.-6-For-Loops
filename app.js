// Question No. 1
// for (var i = 0; i < 5; i++){
//     console.log ("Hello World")
// }

// Question No. 2
// for (var i = 1; i <= 10; i++){
//     console.log (i)
// }

// Question No. 3
// var tableNumber = +prompt ('Enter number')
// var lengt0fTable = +prompt ('Enter Length of table')
// for (var i = 0; i <= lengt0fTable; i++){
//     if (i === 0) {
//         console.log ('Multiplication table of '+ tableNumber)
//         console.log ('Length '+ lengt0fTable)
//         continue
//     }
//     console.log (tableNumber + ' * ' + i + ' = ' + tableNumber * i )
// }

// Question No. 4
// var A = ['Nokia' , 'Samsung' , 'Apple' , 'Sony' , 'Huawei']
// for (var i = 0; i < A.length; i++){
//     console.log (A[i])
// }

// Question No. 5
// var A = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry']
// for (var i = 0; i < A.length; i++){
//     console.log (A[i])
// }

// Question No. 6
// var lengthOfArray = +prompt ('Enter length of array')
// var A = []
// for ( var i = 0; i <= lengthOfArray; i++){
//     if (i === 0){
//         console.log ('Number of Items: '+ lengthOfArray)
//         console.log ('Items: ')
//         continue
//     }
//     var item = prompt ('Enter Item')
//     A.push(item)
//     console.log (A [i-1])
// }

// Question No. 7

// a
// var A = []
// for (var i = 1; i <= 15; i++){
//     A.push (i)
//     if (i === 15){
//         console.log (A.join(','))
//     }
// }

// b
// var A = []
// for (var i = 1; i <= 10; i++){
//     A.push (i)
//     if (i === 10){
//         A.reverse()
//         console.log (A.join(','))
//     }
// }

// c
// var A = []
// for (var i = 0; i <= 20; i = i + 2){
//     A.push (i)
//     if (i === 20){
//         console.log (A.join(','))
//     }
// }

// d
// var A = []
// for (var i = 1; i <= 19; i = i + 2){
//     A.push (i)
//     if (i === 19){
//         console.log (A.join(','))
//     }
// }

// e
// var A = []
// for (var i = 2; i <= 20; i = i + 2){
//     A.push (i+"k")
//     if (i === 20){
//         console.log (A.join(','))
//     }
// }

// Question No. 8 
// var A = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
// var inputName = prompt ('Enter name to search')
// for (var i = 0; i < A.length; i++){
//     if (inputName === A [i]) {
//         console.log (inputName + ' is available at index ' + i + ' in our bakery')
//         break
//     } else if (i === (A.length - 1)){
//         console.log ('we are sorry. ' + inputName + ' is not available in our bakery' )
//     }
// }

// Question No. 9 
// var A = [24 , 1 , 1 , 1 , 1 ]
// for (i = 0; i < A.length; i++ ){
//     if (A[i] > A[i+1] || A[i] > A[i-1]){
//         var largestNumber = A[i]
//     }
// }
// console.log (largestNumber)
