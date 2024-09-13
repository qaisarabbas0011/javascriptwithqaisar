//conversion of datatype...
  let score="99"//i define a string

// for check
 console.log(score);
// // //for checkig type
 console.log(typeof score)

// // now i want to change the datatype
 let viewNumber=Number(score)
console.log(typeof viewNumber)

//now i do some manipluation on score to score1 remain the things are same
 

 let score1="99abc"
// i simply recall the same thing with different variable name
 let viewNumber1=Number(score1)

console.log(typeof viewNumber1)
 //it still return Number as type

//Best practices for us
//simply console the viewNumber1
console.log("show me the typeof viewNumber")
 console.log(viewNumber1)
//output is NaN some issuse in JS we will dicusess later!

