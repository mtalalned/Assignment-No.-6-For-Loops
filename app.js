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
// var A = [600000 , 120 , 2 , 8000000, 110 , 0.5 , 1100 , 5 , 12000 , 0.5 , 0.2 , 500000]
// var largestNumber = A[0];
// for (i = 0; i < A.length; i++){

//     for (var j = 0; j < A.length; j++){
    
//         if (A[i] > A[j] && A[i] > largestNumber){
//             largestNumber = A[i]
//         }
    
//     }
// }
// console.log (largestNumber)


// Question No. 10
// var A = [600000 , 120 , 0.00000002 , 8000000, 110 , 0.5 , 1100 , 5 , 12000 , 0.5 , 0.2 , 500000]
// var smallestNumber = A[0];
// for (i = 0; i < A.length; i++){

//     for (var j = 0; j < A.length; j++){
    
//         if (A[i] < A[j] && A[i] < smallestNumber){
//             smallestNumber = A[i]
//         }
    
//     }
// }
// console.log (smallestNumber)


// Question No. 11
// var A = [600000 , 120 , 0.02 , 8000000, 110 , 0.5 , 1100 , 5 , 120000000 , 0.5 , 0.003 , 500000]
// var smallestNumber = A[0];
// var largestNumber = A[0]
// for (i = 0; i < A.length; i++){

//     for (var j = 0; j < A.length; j++){
    
//         if (A[i] < A[j] && A[i] < smallestNumber){
//             smallestNumber = A[i]
//         }
    
//     }

//     for (var j = 0; j < A.length; j++){
    
//         if (A[i] > A[j] && A[i] > largestNumber){
//             largestNumber = A[i]
//         }
    
//     }
// }
// console.log ('The largest number is ' + largestNumber)
// console.log ('The smallest number is ' + smallestNumber)



// Question No. 12
// var A=[]
// for (var i = 1; i <= 20; i++){
//     A.push (5*i)
//     if (i === 20){
//         console.log (A.join(','))
//     }
// }


// Question No. 13
// var students = ['Ali' , 'Sami' , 'Taha' , 'Inam']
// var scores = [ 58 , 73 , 89 , 90]
// var table = document.querySelector ('table')

// for (var i = 0; i < students.length && i < scores.length; i++) {
//     if (i === 0){
//         table.innerHTML = '<th> Students </th> <th> Scores </th>'
//     }
//     table.innerHTML += '<td>' + students[i] + '</td>' + '<td>' + scores[i] + '</td>'
// }



// Question No. 14
// var scores = [12 , 45 , 3 , 22 , 34 , 50]
// var stopValue = +prompt ('Enter value at stop')

// for (var i = 0; i < scores.length; i++){
//     if (stopValue === scores [i]){
//         var A = scores.slice (0 , i+1)
//         console.log (A.join (','))
//         break
//     }
// }



// Question No. 15
// var A = [[ 1 , 2 , 3 ] , [ 4 , 5 , 6 ] , [ 7 , 8 , 9 ] ]

// for (var i = 0; i < A.length; i++) {
//     console.log (A[i].join (' '))
// }




// Question No. 16
